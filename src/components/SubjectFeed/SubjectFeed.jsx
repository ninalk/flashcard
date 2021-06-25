import React from 'react';
import SubjectCard from '../../components/SubjectCard/SubjectCard';
import { Card } from 'semantic-ui-react';

export default function SubjectFeed({ cards }) {
    const categories = [...new Set(cards.map(card => card.category.toUpperCase()))]; 
    console.log(categories)
    return (
        <Card.Group centered>
            {categories.map((category, index) => {
                return (
                    <SubjectCard 
                        category={category}
                        key={index}
                    />
                )
            })}
        </Card.Group>

    )
}