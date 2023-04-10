import { useState } from "react";

type CarouselProps = {};

import "../style/components/CarouselStyle.scss";


const cards = [
    { title: 'Comment Card 1', text: 'text1', class: 'current' },
    { title: 'Comment Card 2', text: 'text2', class: 'next' },
    { title: 'Comment Card 3', text: 'text3', class: '' },
    { title: 'Comment Card 4', text: 'text4', class: '' },
];


const Carousel = (props: CarouselProps) => {
    const [currentCard, setCurrentCard] = useState<number>(0);
    const [nextCard, setNextCard] = useState<number>(1);

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
            <div className="cards">
                {cards.map((card, index) => (
                <div key={index}
                    className={`card card--${card.class}`}
                    onClick={() => handleCardClick(index)}
                >
                    <h1>{card.title}</h1>
                    <p>{card.text}</p>
                </div>
                ))}
            </div>
        </section>
    );
  };

export { Carousel };
