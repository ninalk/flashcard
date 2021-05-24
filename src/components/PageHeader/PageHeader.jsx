import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Segment, Image, Icon, Dropdown } from 'semantic-ui-react';


export default function PageHeader({ user, handleLogout }){


    return (
        <Segment clearing className="nav-bar">
            <Header as='h3' className='logo' floated='left'>
                <Link to="/" className='logo-text'> flashed</Link>
            </Header>
            <Header as='h3' floated='right'>
                <Link to='' onClick={handleLogout}><Icon className="lock"></Icon>Logout</Link>
            </Header>              
            <Header as='h3' floated='right'>
                <Link to='/new'><Icon className="add"></Icon>Create</Link>
            </Header> 
            <Header as='h3' floated='right'>
                <Link to={`/${user.username}`}><Icon className="user circle outline"></Icon>My Profile</Link>          
            </Header>       
        </Segment>
    )
}