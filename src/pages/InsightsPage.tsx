import { StringToTSX } from "../components/StringToTSX"

import "../style/pages/InsightsPageStyle.scss"

import arrow_forward from "../assets/icons/arrow-forward.svg"
import arrow_down from "../assets/icons/arrow-down.svg"

import { introduction_en, games_en, movies_en, books_en } from "../assets/langs/eng"

type InsightsPageProps = {

}

const InsightsPage = (props: InsightsPageProps) => {

    return (
        <div className="insights-page">
            <section>
                <div className="container">
                    <div className="accordion">
                        <div className="accordion-item" id="question1">
                            <a className="accordion-link" href="#question1">
                                <div className="flex">
                                    <h3>INTRODUCTION</h3>
                                    <ul>
                                        <li>#Google</li>
                                        <li>#Apple</li>
                                        <li>#Mobile</li>
                                        <li>#Media</li>
                                        <li>#Industry</li>
                                    </ul>
                                </div>
                                <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                                <img src={arrow_down} className="icon ion-md-arrow-down" />
                            </a>
                            <div className="answer">
                                <hr className="sticky-hr" /><br />
                                <StringToTSX domString={introduction_en} />
                                <br /><br />
                            </div>
                            <hr />
                        </div>
                        <div className="accordion-item" id="question2">
                            <a className="accordion-link" href="#question2">
                                <div className="flex">
                                <h3>GAMES</h3>
                                <ul>
                                    <li>#Figma</li>
                                    <li>#Sketch</li>
                                    <li>#Adobe</li>
                                    <li>#Invision</li>
                                    <li>#Protopie</li>
                                </ul>
                                </div>
                                <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                                <img src={arrow_down} className="icon ion-md-arrow-down" />
                            </a>
                            <div className="answer">
                                <hr className="sticky-hr" /><br />
                                <StringToTSX domString={games_en} />
                                <br /><br />
                            </div>
                            <hr />
                        </div>
                        <div className="accordion-item" id="question3">
                            <a className="accordion-link" href="#question3">
                                <div className="flex">
                                <h3>MOVIES</h3>
                                <ul>
                                    <li>#Figma</li>
                                    <li>#Sketch</li>
                                    <li>#Adobe</li>
                                    <li>#Invision</li>
                                    <li>#Protopie</li>
                                </ul>
                                </div>
                                <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                                <img src={arrow_down} className="icon ion-md-arrow-down" />
                            </a>
                            <div className="answer">
                                <hr className="sticky-hr" /><br />
                                <StringToTSX domString={movies_en} />
                                <br /><br />
                            </div>
                            <hr />
                        </div>
                        <div className="accordion-item" id="question4">
                            <a className="accordion-link" href="#question4">
                                <div>
                                <h3>BOOKS</h3>
                                <ul>
                                    <li>#Figma</li>
                                    <li>#Sketch</li>
                                    <li>#Adobe</li>
                                    <li>#Invision</li>
                                    <li>#Protopie</li>
                                </ul>
                                </div>
                                <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                                <img src={arrow_down} className="icon ion-md-arrow-down" />
                            </a>
                            <div className="answer">
                                <hr className="sticky-hr" /><br />
                                <StringToTSX domString={books_en} />
                                <br /><br />
                            </div>
                            <hr />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export { InsightsPage }