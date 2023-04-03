import { StringToTSX } from "../components/StringToTSX"

import "../style/pages/InsightsPageStyle.scss"

import arrow_forward from "../assets/icons/arrow-forward.svg"
import arrow_down from "../assets/icons/arrow-down.svg"

type InsightsPageProps = {

}

const introduction = `
<p className="text-container">
The entertainment industry has undergone a significant transformation in the last decade, 
thanks in part to the rise of websites and applications that provide and promote various forms of media such as
applications, music, movies, or even books. 

The 
    <a href="https://play.google.com" target="_blank" className="text-link">Google Play Store</a> 
    and <a href="https://www.apple.com/it/app-store" target="_blank" className="text-link">

Apple App Store</a> have been instrumental in providing an effective platform for developers 
and most importantly companies to reach a wider audience, 
and the entertainment industry has been one of the main beneficiaries of this trend. 

In this introduction, we will discuss how the entertainment industry has benefited from these changes.

<br /><br />

One of the significant advantages that both of these services offer is the size of their media pools: with a near-global reach, in fact, 
they provide to a great quantity of users almost all the media they can imagine, creating a big community consequentially.
This is very profitable for buisnesses, especially little ones that cannot afford big advertisment campaigns, 
thanks to the large userbases it is a cheap way to sell products with little advertisment. 

<br /><br />

Another significant advantage and reason for the success of the play store apps is the ease of use it provides. 
Both platforms have a user-friendly and intuitive interface, making it simple for users to find and download the media they want to consume. 

This has played particularly well for the entertainment industry, as users can easily search for and find the content they are interested in. 
This has resulted in a higher engagement rate, with users spending more time on the apps or games and engaging with the content.

<br /><br />

These services have also provided a new and revolutionary revenue stream for the entertainment industry:
The in-app purchase model has allowed companies to generate revenue beyond the initial purchase of the app, and
this has allowed for the development of freemium apps, where users can download the app for free and pay 
for additional features or content within the app. This model has been particularly beneficial for the 
    <a href="/store/games" className="text-link">gaming industry</a>, 
where developers can offer in-app purchases for additional game content or virtual goods.

<br /><br />

This type of marketing template has also allowed for the development of new types of entertainment content. 
For example, the rise of mobile gaming has led to the development of new genres of games, such as hyper-casual games or augmented reality games. 
These types of games have been particularly successful on mobile devices and have provided a new avenue for entertainment companies to reach audiences.

<br /><br />

In conclusion, the entertainment industry has greatly benefited from this new marketing and advertisment model. 
The platforms have provided a global reach, ease of use, new revenue streams, and the development of new types of content. 
As mobile devices continue to become more prevalent, it is very likely that the entertainment 
industry will continue to rely on these platforms to reach their audiences.
</p>
`

const games = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
`
const movies = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
`
const books = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
`

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
                                <StringToTSX domString={introduction} />
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
                                <StringToTSX domString={games} />
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
                                <StringToTSX domString={movies} />
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
                                <StringToTSX domString={books} />
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