import React, { useState } from 'react';
import './FlashCard.css';
import { Card, Button, Divider } from 'semantic-ui-react';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';
import EditCardButton from '../EditCardButton/EditCardButton';


export default function FlashCard({ card, removeCard, updateCard, isProfile }) {
    const [answer, setAnswer] = useState(false);
    
    function handleShowOrHideAnswer() {
        setAnswer(prevCheck => !prevCheck);
    }

    return (
        <Card key={card._id} className='flash-card'>
            <Card.Content className='card-content'>
                <Card.Header as='h1'>{card.question}</Card.Header>
                <Divider></Divider>
                <Card.Description>
                    {answer ? card.answer : ''}
                </Card.Description>
            </Card.Content>
            {isProfile ?
                <Card.Content extra>
                    <div className='ui three buttons'>
                        <Button 
                            className='answer-btn'
                            onClick={() => handleShowOrHideAnswer()}
                        >
                        Answer
                        </Button>
                        <EditCardButton 
                            updateCard={updateCard}
                            card={card}
                        />
                        <RemoveCardButton 
                            removeCard={removeCard} 
                            card={card} 
                        />
                    </div>
                </Card.Content>
                :            
                <Card.Content extra className='ui one buttons'>
                    <Button 
                        className='answer-btn'
                        onClick={() => handleShowOrHideAnswer()}
                    >
                    Answer
                    </Button>
                </Card.Content>
            }
        </Card>
    )
}