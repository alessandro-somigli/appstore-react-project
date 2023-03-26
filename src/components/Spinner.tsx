import '../style/components/SpinnerStyle.scss'

type SpinnerProps = {
    children?: React.ReactNode
}

const Spinner = (props: SpinnerProps) => {

    return (<div className="lds-hourglass"></div>)
}

export { Spinner }