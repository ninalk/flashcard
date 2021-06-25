import React from 'react';
import './SubjectCard.css';
import { Grid, Card } from 'semantic-ui-react';

export default function SubjectCard({ category }) {

    return (
        <Card 
            header={category.toUpperCase()}
            className='subject-card'
        />
    )
}