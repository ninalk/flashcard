import React from 'react';
import './FlashCard.css';
import { Card, Button, Divider } from 'semantic-ui-react';


export default function FlashCard({ card }) {

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
                    <Button className='delete-btn'>
                        Delete
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}