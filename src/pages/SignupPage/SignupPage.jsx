import React, { useState } from 'react';
import './SignupPage.css';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Grid, Form, Segment, Header } from 'semantic-ui-react';
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';


export default function SignUpPage(props){
    const history = useHistory();
    const [error, setError] = useState('')
    const [state, setState] = useState({
        username: '',
        email: '',
        password:'',
        passwordConf: ''
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
            await userService.signup(state);
            props.handleSignUpOrLogin();
            history.push('/');
        } catch(err) {
            setError(err.message)
        }
    }

    return (
        <>
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
                <Header as='h2' textAlign='center' className="signup-logo">
                    <span className='logo-text'> FLASHED</span>
                </Header>        
                <Form autoComplete="off"  onSubmit={handleSubmit}>
                <Segment>               
                    <Form.Input                    
                      name="username"
                      placeholder="username"
                      value={state.username}
                      onChange={handleChange}
                      required
                    />
                    <Form.Input
                      type="email"                  
                      name="email"
                      placeholder="email"
                      value={state.email}
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
                    <Form.Input     
                      name="passwordConf"
                      type="password"
                      placeholder="Confirm Password"
                      value={state.passwordConf}
                      onChange={handleChange}
                      required
                    />
                    <Button
                      type="submit"
                      className="btn"
                    //   disabled={invalidForm}
                    >
                    Signup
                  </Button>
                  </Segment>
                  {error ? <ErrorMessage error={error} /> : null}
                </Form>
               
            </Grid.Column>
          </Grid>
        </>
      );   
    
}
