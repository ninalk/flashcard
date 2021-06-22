import React from 'react';
import { Grid, Card } from 'semantic-ui-react';
import FlashCard from '../FlashCard/FlashCard';

export default function CardFeed({ cards }) {

    return (
        <Card.Group centered>
            {cards.map((card) => {
                return (
                    <FlashCard 
                        card={card}
                        key={card._id}
                    />
                )
            })}
        </Card.Group>
    )
}