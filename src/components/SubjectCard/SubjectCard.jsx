import React from 'react';
import './SubjectCard.css';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function SubjectCard({ category }) {

    return (
        <Link to={`/cards/${category}`}>
            <Card 
                header={category.toUpperCase()}
                className='subject-card'
            />
        </Link>
    )
}