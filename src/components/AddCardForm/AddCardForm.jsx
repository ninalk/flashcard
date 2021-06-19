import React, { useState } from 'react';
import { Button, Form, Grid, Segment } from 'semantic-ui-react';

export default function AddCardForm({ handleAddCard }) {
    const [state, setState] = useState({
        category: '',
        question: '',
        answer: ''
    });

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        handleAddCard(state);
    }

    return (
        <Grid textAlign='center' style={{ height: '25vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 450 }}>
            <Segment>           
                <Form  autoComplete="off" onSubmit={handleSubmit}>                
                <Form.Input
                    className="form-control"
                    name="category"
                    value={state.category}
                    placeholder="category"
                    onChange={handleChange}
                    required
                />  
                <Form.Input
                    className="form-control"
                    name="question"
                    value={state.question}
                    placeholder="question"
                    onChange={handleChange}
                    required
                />
                <Form.Input
                    className="form-control"
                    name="answer"
                    value={state.answer}
                    placeholder="answer"
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    className="btn"
                >
                    ADD FLASHCARD
                </Button>
                </Form>
            </Segment>
        </Grid.Column>
    </Grid>
    )
}