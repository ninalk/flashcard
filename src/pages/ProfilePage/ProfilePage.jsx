import React, { useState, useEffect } from 'react';
import userService from '../../utils/userService';
import * as cardsAPI from '../../utils/card-api';
import { Grid, Loader } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader/PageHeader';
import FlashCard from '../../components/FlashCard/FlashCard';
import Carousel, { CarouselItem } from '../../components/Carousel/Carousel';
import { useLocation } from 'react-router-dom';

export default function ProfilePage({ user, handleSignUpOrLogin, handleLogout }) {
    const [profileUser, setProfileUser] = useState({});
    const [cards, setCards] = useState([]);
    const [card, setCard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const location = useLocation();

    async function getProfile(){
        try {
            const username = location.pathname.substring(1);
            const data = await userService.getProfile(username);
            setLoading(() => false);
            setProfileUser(() => data.user);
        } catch(err) {
            setError(err);
        }
    }

    async function getCards() {
        try {
            const data = await cardsAPI.getAll();
            setCards([...data.cards])
        } catch(err) {
            console.log(err)
        }
    }
    
    async function removeCard(cardId) {
        try {
            const data = await cardsAPI.deleteOne(cardId);
            getCards();
        } catch(err) {
            console.log(err)
        }
    }

    async function updateCard(cardId, card) {
        try {
            const data = await cardsAPI.editCard(cardId, card);
            setCard(data.card)
            getCards();
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
        getProfile();
        getCards();
    }, [user, location.pathname])
    
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
                            <PageHeader profileUser={profileUser} user={user} handleLogout={handleLogout}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Carousel 
                                cards={cards} 
                                removeCard={removeCard}
                                updateCard={updateCard}
                                isProfile={true}
                                shuffleCards={shuffleCards}
                            >
                                {cards.map((card, index) => {
                                    return (
                                        <CarouselItem 
                                            key={index} 
                                            removeCard={removeCard}
                                            updateCard={updateCard}
                                            isProfile={true}
                                        >
                                            <FlashCard 
                                                card={card}
                                                key={card._id}
                                                removeCard={removeCard}
                                                updateCard={updateCard}
                                                isProfile={true}
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