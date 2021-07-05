import React from 'react';
import './ShuffleButton.css';
import { Button, Grid } from 'semantic-ui-react';


export default function ShuffleButton({ shuffleCards, cards }) {
    

    function handleShuffleClick() {
        console.log('hitting the shuffle')
        for (let i = cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [cards[i], cards[j]] = [cards[j], cards[i]];
        }
        shuffleCards(cards);
    }

    return (
        <Grid centered>
            <Button 
                className='shuffle-btn'
                onClick={() => handleShuffleClick()}
            >
                *** Shuffle Cards ***
            </Button>
        </Grid>
    )
} 