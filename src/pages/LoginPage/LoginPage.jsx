import React, { useState } from 'react';
import './LoginPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react';


export default function LoginPage(props){
    const history = useHistory();
    const [error, setError] = useState('');
    const [state, setState] = useState({
        username: '',
        password: ''
    });

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e){
        e.preventDefault();

        try {
            await userService.login(state);
            props.handleSignUpOrLogin();
            history.push('/');
        } catch(err){
            setError(err.message);
        }
    }

    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }} >
                    <Form  autoComplete="off" onSubmit={handleSubmit} >                        
                        <Header as='h2' textAlign='center' className="signup-logo">
                            <span className='logo-text'> 
                                <span className='pink'>F</span>
                                <span className='green'>L</span>
                                <span className='yellow'>A</span>
                                <span className='blue'>S</span>
                                <span className='orange'>H</span>
                                <span className='pink'>E</span>
                                <span className='green'>D</span>
                            </span>
                        </Header>
                        <Segment stacked>
                            <Form.Input
                            type="username"                           
                            name="username"
                            placeholder="username"
                            value={state.username}
                            onChange={handleChange}
                            required
                            />
                            <Form.Input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={state.password}
                            onChange={handleChange}
                            required
                            />
                        <Button
                            color='olive'
                            fluid size='large'
                            type="submit"
                            className="btn"
                            // disabled={invalidForm}
                        >
                            Login
                        </Button>
                        <Message>
                            New to us? <Link to='/signup'>&nbsp;<span className='blue'>Sign Up</span></Link>
                        </Message>
                        </Segment>
                    </Form>
                </Grid.Column>
                {error ? <ErrorMessage error={error} /> : null}
            </Grid>
      </>
      );
}

