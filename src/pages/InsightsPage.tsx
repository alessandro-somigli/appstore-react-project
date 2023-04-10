import React, { useState } from "react"
import { Accordion } from "../components/Accordion"
import { Carousel } from "../components/Carousel"

import "../style/pages/InsightsPageStyle.scss"

import arrow_icon from "../assets/icons/arrow.svg"

type InsightsPageProps = {}

const InsightsPage = (props: InsightsPageProps) => {
    const [pageSection, setPageSection] = useState(0)
    const [sideWidth, setSideWidth] = useState(100)

    const onHandlePageClick = (page: number) => {
        if (page === 0) {
            setSideWidth(100)
            setPageSection(0)
        } else if (page === 1) {
            setSideWidth(0)
            setPageSection(1)
        }
    }

    return (
        <div className="insights-page">
            <span className={"arrow arrow-left " + (pageSection==1? "active" : "")} onClick={() => onHandlePageClick(0)}>
                <img className="arrow-icon" src={arrow_icon} alt="arrow icon" />
            </span>
            <span className={"arrow arrow-right " + (pageSection==0? "active" : "")} onClick={() => onHandlePageClick(1)}>
                <img className="arrow-icon" src={arrow_icon} alt="arrow icon" />
            </span>

            <div id="left-side" style={{width: sideWidth+"%"}} className="side">
                <Accordion /> 
            </div>
            <div id="right-side" className="side">
                <Carousel />
            </div>

        </div>
    )
}

export { InsightsPage }