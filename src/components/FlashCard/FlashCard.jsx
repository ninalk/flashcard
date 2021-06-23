import React from 'react';
import './FlashCard.css';
import { Card, Button, Divider } from 'semantic-ui-react';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';
import EditCardButton from '../EditCardButton/EditCardButton';


export default function FlashCard({ card, removeCard, updateCard }) {

    return (
        <Card key={card._id} className='flash-card'>
            <Card.Content className='card-content'>
                <Card.Header as='h1'>Q: {card.question}</Card.Header>
                {/* <Card.Meta>{card.category}</Card.Meta> */}
                <Divider></Divider>
                <Card.Description>
                    A: {card.answer}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui three buttons'>
                    <Button className='answer-btn'>
                        Answer
                    </Button>
                    <EditCardButton 
                        className='edit-btn'
                        updateCard={updateCard}
                        card={card}
                    />
                    <RemoveCardButton 
                        className='delete-btn' 
                        removeCard={removeCard} 
                        card={card} 
                    />
                </div>
            </Card.Content>
        </Card>
    )
}