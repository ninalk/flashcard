import React, { useState, useEffect } from 'react';
import userService from '../../utils/userService';
import PageHeader from '../../components/PageHeader/PageHeader';
import {useLocation} from 'react-router-dom';

export default function ProfilePage({ user, handleSignUpOrLogin, handleLogout }) {
    const [profileUser, setProfileUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const location = useLocation();

    
    return (
        <h1>PROFILE PAGE</h1>
    )
}