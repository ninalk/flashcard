import React from 'react';
import './SubjectCard.css';
import { Grid, Card } from 'semantic-ui-react';

export default function SubjectCard({ cards }) {

    return (
        <Grid relaxed centered>
            
                    {cards.map((card) => {
                        return (
                            <>
                            <Grid.Row columns={3}>
                                <Grid.Column>
                                    <Card 
                                        header={card.category}
                                        key={card._id}
                                        className='subject-card'
                                    />
                                </Grid.Column>
                            </Grid.Row>
                            </>
                        )
                    })}  
            
        </Grid>
    )
}