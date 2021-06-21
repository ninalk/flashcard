import React from 'react';
import { Card, Button } from 'semantic-ui-react';


export default function FlashCard({ card }) {

    return (
        <Card key={card._id}>
            <Card.Content>
                <Card.Header>Q: {card.question}</Card.Header>
                {/* <Card.Meta>{card.category}</Card.Meta> */}
                <Card.Description>
                    A: {card.answer}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Correct
                    </Button>
                    <Button basic color='red'>
                        Wrong
                    </Button>
                </div>
            </Card.Content>
        </Card>
    )
}