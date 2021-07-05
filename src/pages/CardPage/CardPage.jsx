import React, { useState, useEffect } from 'react';
import './CardPage.css';
import * as cardsAPI from '../../utils/card-api';
import { Grid, Loader } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader/PageHeader';
import FlashCard from '../../components/FlashCard/FlashCard';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel';
import { useLocation } from 'react-router-dom';

export default function CardPage({ user, handleLogout }) {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    async function getCardCategory() {
        try {
            const category = location.pathname.substring(1);
            const data = await cardsAPI.getCategory(category);
            setCards(data.cards);
            setLoading(false);

        } catch(err) {
            console.log(err)
        }
    }

    async function shuffleCards(cards) {
        try {
            setCards([...cards]);
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCardCategory();
    }, []);

    return ( 
        <>
            { loading ?
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >                
                    <Grid.Column style={{ maxWidth: 450}}>                            
                        <Loader size='large' active>Loading</Loader>                         
                    </Grid.Column>                 
                </Grid>
                :
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader user={user} handleLogout={handleLogout}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Carousel 
                                cards={cards}
                                isProfile={false} 
                                shuffleCards={shuffleCards}
                            >
                                {cards.map((card, index) => {
                                    return (
                                        <CarouselItem 
                                            key={index}
                                            isProfile={false} 
                                        >
                                            <FlashCard 
                                                card={card}
                                                key={card._id}
                                                isProfile={false}
                                            />
                                        </CarouselItem>
                                    )
                                })}
                            </Carousel>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }
        </>
    )
}