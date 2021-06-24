import React, { useState, useEffect } from 'react';
import './HomePage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import SubjectCard from '../../components/SubjectCard/SubjectCard';
import * as cardsAPI from '../../utils/card-api';

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
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <SubjectCard cards={cards} />
        </>
    )
}