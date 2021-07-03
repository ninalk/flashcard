import React from 'react';
import './Introduction.css';
import { Header } from 'semantic-ui-react';

export default function Introduction({ isHomePage }) {

    return (
        <Header 
            as='h2' 
            color='grey'
            className='homepage-heading'
            style={{ maxWidth: 400 }}
        >
            {isHomePage ? 
                'Welcome, explore these topics!'
                :
                'Create your flashcards...'
            }
        </Header>
    )
}