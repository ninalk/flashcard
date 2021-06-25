import React from 'react';
import './Introduction.css';
import { Header } from 'semantic-ui-react';

export default function Introduction() {

    return (
        <Header 
            as='h2' 
            color='grey'
            className='homepage-heading'
            style={{ maxWidth: 400 }}
        >
            Welcome, explore these topics!
        </Header>
    )
}