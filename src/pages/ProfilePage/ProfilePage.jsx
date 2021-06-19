import React, { useState, useEffect } from 'react';
import userService from '../../utils/userService';
import * as cardsAPI from '../../utils/card-api';
import { Grid, Loader, Divider } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader/PageHeader';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import CardFeed from '../../components/CardFeed/CardFeed';
import {useLocation} from 'react-router-dom';

export default function ProfilePage({ user, handleSignUpOrLogin, handleLogout }) {
    const [profileUser, setProfileUser] = useState({});
    const [cards, setCards] = useState([]);
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

    async function handleAddCard(card) {
        try {
            const data = await cardsAPI.create(card);
            console.log(data, ' this is the card data')
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        console.log('heerrreee')
        getProfile();
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
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader profileUser={profileUser} user={user} handleLogout={handleLogout}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <AddCardForm handleAddCard={handleAddCard} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <CardFeed />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }
        </>
    )
}