import { useState } from "react";

type CarouselProps = {};

import "../style/components/CarouselStyle.scss"

import overview_annual_number_of_global_mobile_app_downloads from "../assets/images/statista/overview-annual-number-of-global-mobile-app-downloads-2016-2022.png"

import apple_distribution_of_free_and_paid_ios_apps from "../assets/images/statista/apple-distribution-of-free-and-paid-ios-apps-2019-2023.png"
import google_distribution_of_free_and_paid_android_apps from "../assets/images/statista/google-distribution-of-free-and-paid-android-apps-2023.png"
import amazon_distribution_of_free_and_paid_amazon_apps from "../assets/images/statista/amazon-distribution-of-free-and-paid-amazon-apps-2020-2023.png"

import apple_number_of_active_apps_from_the_app_store from "../assets/images/statista/apple-number-of-active-apps-from-the-apple-app-store-2008-2022.png"
import google_number_of_available_apps from "../assets/images/statista/google-number-of-available-apps-2009-2023.png"
import amazon_number_of_available_apps from "../assets/images/statista/amazon-number-of-available-apps-as-of-q3-2022.png"
import china_number_of_smartphone_apps_on_app_stores_in_china from "../assets/images/statista/china-number-of-smartphone-apps-on-app-stores-in-china-2017-h1-2022.png"

import apple_quarterly_growth_of_available_apps from "../assets/images/statista/apple-quarterly-growth-of-available-apps-as-2015-2022.png"
import google_quarterly_growth_of_available_apps from "../assets/images/statista/google-quarterly-growth-of-available-apps-as-2015-2022.png"

import apple_annual_gross_app_revenue from "../assets/images/statista/apple-annual-gross-app-revenue-2017-2021.png"
import apple_average_app_price from "../assets/images/statista/apple-average-app-price-2022.png"

const cards = [
    { img: overview_annual_number_of_global_mobile_app_downloads, class: 'out' },
    { img: apple_distribution_of_free_and_paid_ios_apps, class: 'current' },
    { img: google_distribution_of_free_and_paid_android_apps, class: 'next' },
    { img: amazon_distribution_of_free_and_paid_amazon_apps, class: '' },
    { img: apple_number_of_active_apps_from_the_app_store, class: '' },
    { img: google_number_of_available_apps, class: '' },
    { img: amazon_number_of_available_apps, class: '' },
    { img: china_number_of_smartphone_apps_on_app_stores_in_china, class: '' },
    { img: apple_quarterly_growth_of_available_apps, class: '' },
    { img: google_quarterly_growth_of_available_apps, class: '' },
    { img: apple_annual_gross_app_revenue, class: '' },
    { img: apple_average_app_price, class: '' }
];


const Carousel = (props: CarouselProps) => {
    const [currentCard, setCurrentCard] = useState<number>(1);

    const handleCardClick = (index: number) => {


        cards.forEach(card => card.class = '')

        const out = currentCard
        const current = index
        const next = (cards.length == current+1? 0 : current+1)

        cards[out].class = 'out'
        cards[current].class = 'current'
        cards[next].class = 'next'

        setCurrentCard(current)
    };
  
    return (
        <section className="carousel-section">
            <ul className="cards">
                {cards.map((card, index) => (
                <li key={index}
                    className={`card card--${card.class}`}
                    onClick={() => handleCardClick(index)}
                >
                    <img className="card-image" src={card.img} alt="" />
                </li>
                ))}
            </ul>
        </section>
    );
  };

export { Carousel };
