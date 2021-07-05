import React from 'react';
import './PageHeader.css';
import { Link } from 'react-router-dom';
import { Header, Segment, Icon } from 'semantic-ui-react';


export default function PageHeader({ user, handleLogout }){


    return (
        <Segment clearing className="nav-bar">
            <Header as='h3' className='logo' floated='left'>
                <Link to="/" className='logo-text'>
                    <span className='logo-text'> 
                        <span className='pink'>F</span>
                        <span className='green'>L</span>
                        <span className='yellow'>A</span>
                        <span className='blue'>S</span>
                        <span className='orange'>H</span>
                        <span className='pink'>E</span>
                        <span className='green'>D</span>
                    </span>
                </Link>
            </Header>
            <Header as='h3' floated='right' className='nav-bar-link'>
                <Link to='' onClick={handleLogout}><Icon name='log out'></Icon></Link>
            </Header>
            <Header as='h3' floated='right' className='nav-bar-link'>
                <Link to='/new' >CREATE</Link>
            </Header>               
            <Header as='h3' floated='right' className='nav-bar-link'>
                <Link to={`/${user.username}`}>MY FLASHCARDS</Link>          
            </Header>       
        </Segment>
    )
}