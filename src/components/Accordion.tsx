import React, { useState } from "react"
import { StringToTSX } from "./StringToTSX"

import "../style/components/AccordionStyle.scss"

import italy_image from "../assets/images/italy.png"
import uk_image from "../assets/images/uk.png"

import arrow_forward from "../assets/icons/arrow-forward.svg"
import arrow_down from "../assets/icons/arrow-down.svg"

import { introduction_en, games_en, movies_en, books_en } from "../assets/langs/eng"
import { introduction_it, games_it, movies_it, books_it } from "../assets/langs/ita"

type AccordionProps = {};

const Accordion = (props: AccordionProps) => {
    const [language, setLanguage] = useState("eng")
    const [introduction, setIntroduction] = useState(introduction_en)
    const [games, setGames] = useState(games_en)
    const [movies, setMovies] = useState(movies_en)
    const [books, setBooks] = useState(books_en);

    const onHandleFlagClick = (lang: string) => {
        setLanguage(lang)
        if (lang === "eng") {
            setIntroduction(introduction_en)
            setGames(games_en)
            setMovies(movies_en)
            setBooks(books_en)
        } else if (lang === "ita") {
            setIntroduction(introduction_it)
            setGames(games_it)
            setMovies(movies_it)
            setBooks(books_it)
        }
    }

    return (
        <section className="accordion-section">
        <div className="container">
            <div className="flags-container">
            <div
                className={"flag " + (language === "eng" ? "active" : "")}
                onClick={() => onHandleFlagClick("eng")}
            >
                <img src={uk_image} alt="uk image" />
            </div>
            <div
                className={"flag " + (language === "ita" ? "active" : "")}
                onClick={() => onHandleFlagClick("ita")}
            >
                <img src={italy_image} alt="italy image" />
            </div>
            </div>
            <div className="accordion">
                <div className="accordion-item" id="question1">
                    <a className="accordion-link" href="#question1">
                    <div className="flex">
                        <h3>INTRODUCTION</h3>
                        <ul>
                        <li>#Google</li>
                        <li>#Apple</li>
                        <li>#Industry</li>
                        </ul>
                    </div>
                    <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                    <img src={arrow_down} className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <hr className="sticky-hr" />
                        <br />
                        <StringToTSX domString={introduction} />
                        <br />
                        <br />
                    </div>
                    <hr />
                </div>
                <div className="accordion-item" id="question2">
                    <a className="accordion-link" href="#question2">
                    <div className="flex">
                        <h3>GAMES</h3>
                        <ul>
                        <li>#Gaming</li>
                        <li>#Mobile</li>
                        <li>#Invision</li>
                        </ul>
                    </div>
                    <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                    <img src={arrow_down} className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <hr className="sticky-hr" />
                        <br />
                        <StringToTSX domString={games} />
                        <br />
                        <br />
                    </div>
                    <hr />
                </div>
                <div className="accordion-item" id="question3">
                    <a className="accordion-link" href="#question3">
                    <div className="flex">
                        <h3>MOVIES</h3>
                        <ul>
                        <li>#Cinema</li>
                        <li>#Entertainment</li>
                        <li>#Buisness</li>
                        </ul>
                    </div>
                    <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                    <img src={arrow_down} className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <hr className="sticky-hr" />
                        <br />
                        <StringToTSX domString={movies} />
                        <br />
                        <br />
                    </div>
                    <hr />
                </div>
                <div className="accordion-item" id="question4">
                    <a className="accordion-link" href="#question4">
                    <div>
                        <h3>BOOKS</h3>
                        <ul>
                        <li>#Reading</li>
                        <li>#Community</li>
                        <li>#Tech</li>
                        </ul>
                    </div>
                    <img src={arrow_forward} className="icon ion-md-arrow-forward" />
                    <img src={arrow_down} className="icon ion-md-arrow-down" />
                    </a>
                    <div className="answer">
                        <hr className="sticky-hr" />
                        <br />
                        <StringToTSX domString={books} />
                        <br />
                        <br />
                    </div>
                    <hr />
                </div>
            </div>
        </div>
        </section>
  );
};

export { Accordion };
