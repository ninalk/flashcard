import React, { useState, useEffect } from 'react';
import './HomePage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import SubjectFeed from '../../components/SubjectFeed/SubjectFeed';
import Introduction from '../../components/Introduction/Introduction';
import * as cardsAPI from '../../utils/card-api';
import { Grid } from 'semantic-ui-react';

export default function HomePage({ user, handleLogout }){
    const [cards, setCards] = useState([]);

    async function getCards() {
        try {
            const data = await cardsAPI.getAll();
            setCards([...data.cards])
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getCards();
    }, []);

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader user={user} handleLogout={handleLogout} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Introduction />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <SubjectFeed cards={cards} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}