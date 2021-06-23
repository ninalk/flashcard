import React from 'react';
import './FlashCard.css';
import { Card, Button, Divider } from 'semantic-ui-react';
import RemoveCardButton from '../RemoveCardButton/RemoveCardButton';


export default function FlashCard({ card, removeCard }) {

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
                    <Button className='edit-btn'>
                        Edit
                    </Button>
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