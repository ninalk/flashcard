import React from 'react';
import './FormPage.css';
import { Grid } from 'semantic-ui-react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import Introduction from '../../components/Introduction/Introduction';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as cardsAPI from '../../utils/card-api';

export default function FormPage({ profileUser, user, handleLogout }) {   
    async function handleAddCard(card) {
        try {
            await cardsAPI.create(card);
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <Grid centered>
            <Grid.Row>
                <Grid.Column>
                    <PageHeader profileUser={profileUser} user={user} handleLogout={handleLogout}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column>
                    <Introduction isHomePage={false} />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{ maxWidth: 450}}>
                    <AddCardForm handleAddCard={handleAddCard} />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}