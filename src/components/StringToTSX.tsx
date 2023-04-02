import { createElement, ReactNode } from "react"

const getNodes = (string: string): NodeListOf<ChildNode> =>
  new DOMParser().parseFromString(string, "text/html").body.childNodes

type StyleObject = Record<string, string>

type AttributeObject = {
  [key: string]: string | StyleObject | null
}

const emptyTags = ['AREA', 'BASE', 'BR', 'COL', 'COMMAND', 'EMBED', 'HR', 'IMG', 'INPUT', 'KEYGEN', 'LINK', 'META', 'PARAM', 'SOURCE', 'TRACK', 'WBR']

type CreateTSX = (nodeArray: ArrayLike<ChildNode>) => ReactNode[]

const createTSX: CreateTSX = (nodeArray) =>
  Array.from(nodeArray).map((node, index) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      return node.nodeValue
    }

    const element = node as HTMLElement
    const attributeObj: AttributeObject = {}
    const { attributes, localName, childNodes } = element

    if (attributes) {
      Array.from(attributes).forEach((attribute) => {
        if (attribute.name === "style") {
          const styleAttributes = attribute.nodeValue
            ? attribute.nodeValue.split(";")
            : null
          const styleObj: StyleObject = {}

          styleAttributes?.forEach((attribute) => {
            const [key, value] = attribute.split(":")
            styleObj[key] = value.trim()
          })

          attributeObj[attribute.name] = styleObj
        } else {
          attributeObj[attribute.name] = attribute.nodeValue
        }
      })
    }

    return localName
      ? createElement(
          localName,
          { ...attributeObj, key: index },
          (emptyTags.includes(node.nodeName)? undefined : 
            childNodes && Array.isArray(Array.from(childNodes))
            ? createTSX(Array.from(childNodes))
            : []
          )
        )
      : null
})

type StringToTSXProps = { domString: string }

const StringToTSX = ({ domString }: StringToTSXProps): JSX.Element => (
  <>{createTSX(getNodes(domString))}</>
)

export { StringToTSX }
