import React from 'react';
import './HomePage.css';
import PageHeader from '../../components/PageHeader/PageHeader';

export default function HomePage({ user, handleLogout }){
    
    return (
        <>
            <PageHeader user={user} handleLogout={handleLogout} />
            <h1>HOME PAGE</h1>
        </>
    )
}