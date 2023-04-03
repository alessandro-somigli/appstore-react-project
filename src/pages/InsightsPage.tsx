import { StringToTSX } from "../components/StringToTSX"

import "../style/pages/InsightsPageStyle.scss"

type InsightsPageProps = {

}

const introduction = `
The entertainment industry has undergone a significant transformation in the last decade, thanks in part to the rise of mobile apps and the app stores that support them. The Google Play Store and Apple App Store have been instrumental in providing an effective platform for developers to reach a wider audience, and the entertainment industry has been one of the main beneficiaries of this trend. In this essay, we will discuss how the entertainment industry has benefited from the Google Play Store or the Apple App Store.
<br /><br />
One of the significant advantages of the Google Play Store or the Apple App Store is the global reach it provides to the entertainment industry. Both platforms have a vast user base, with millions of people accessing apps from all over the world. This reach has allowed entertainment companies to promote their products to a global audience and reach consumers who may not have had access to their content before. This has been particularly beneficial for smaller companies or independent developers who may not have had the resources to reach a broader audience on their own.
<br /><br />
Another significant advantage of the Google Play Store or the Apple App Store is the ease of use it provides. Both platforms have a user-friendly interface, making it simple for users to find and download the apps they need. This has been particularly beneficial for the entertainment industry, as users can easily search for and find the content they are interested in. This has resulted in a higher engagement rate, with users spending more time on the apps and engaging with the content.
<br /><br />
The Google Play Store or the Apple App Store has also provided a new revenue stream for the entertainment industry. The in-app purchase model has allowed companies to generate revenue beyond the initial purchase of the app. This has allowed for the development of freemium apps, where users can download the app for free and pay for additional features or content within the app. This model has been particularly beneficial for the gaming industry, where developers can offer in-app purchases for additional game content or virtual goods.
<br /><br />
The Google Play Store or the Apple App Store has also allowed for the development of new types of entertainment content. For example, the rise of mobile gaming has led to the development of new genres of games, such as hyper-casual games or augmented reality games. These types of games have been particularly successful on mobile devices and have provided a new avenue for entertainment companies to reach audiences.
<br /><br />
In conclusion, the entertainment industry has greatly benefited from the Google Play Store or the Apple App Store. The platforms have provided a global reach, ease of use, new revenue streams, and the development of new types of content. As mobile devices continue to become more prevalent, it is likely that the entertainment industry will continue to rely on these platforms to reach their audiences.`

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
                                        <li>#Figma</li>
                                        <li>#Sketch</li>
                                        <li>#Adobe</li>
                                        <li>#Invision</li>
                                        <li>#Protopie</li>
                                    </ul>
                                </div>
                                <i className="icon ion-md-arrow-forward"></i>
                                <i className="icon ion-md-arrow-down"></i>
                            </a>
                            <div className="answer">
                                <hr /><br />
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
                                <i className="icon ion-md-arrow-forward"></i>
                                <i className="icon ion-md-arrow-down"></i>
                            </a>
                            <div className="answer">
                                <hr /><br />
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
                                <i className="icon ion-md-arrow-forward"></i>
                                <i className="icon ion-md-arrow-down"></i>
                            </a>
                            <div className="answer">
                                <hr /><br />
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
                                <i className="icon ion-md-arrow-forward"></i>
                                <i className="icon ion-md-arrow-down"></i>
                            </a>
                            <div className="answer">
                                <hr /><br />
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