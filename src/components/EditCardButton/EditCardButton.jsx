import React, { useState } from 'react';
import './EditCardButton.css';
import { Button, Form, Grid, Segment, Modal, Icon } from 'semantic-ui-react';

export default function EditCardButton({ card, updateCard }) {
    const [open, setOpen] = React.useState(false)
    const [state, setState] = useState({
        category: card.category,
        question: card.question,
        answer: card.answer,
    });  

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(e){
        // e.preventDefault()
        console.log('hitting submit')
        const cardId = card._id;
        const formData = new FormData();
        
        for (let key in state){
            formData.append(key, state[key]);
        }
        updateCard(cardId, state)
    } 

    return (
        <>
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='mini'
            trigger={<Button className='edit-btn'>Edit</Button>}
        >
            <Modal.Content>
            <h4>Edit Flashcard</h4>
                <Grid textAlign='center'  verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Segment raised>               
                            <Form.Input                    
                                name="category"
                                placeholder="category"
                                value={state.category}
                                onChange={handleChange}
                                required
                            />
                            <Form.Input
                                type="question"                  
                                name="question"
                                placeholder="question"
                                value={state.question}
                                onChange={handleChange}
                                required
                            />
                            <Form.TextArea             
                                name="answer"
                                type="answer"
                                placeholder="answer"
                                value={state.answer}
                                style={{ minHeight: 200 }}
                                onChange={handleChange}
                                required
                            />
                            </Segment>
                        </Form>                        
                    </Grid.Column>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button basic inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> Cancel
                </Button>
                <Button color='green' inverted onClick={() => {setOpen(false); handleSubmit();}}>
                    <Icon name='checkmark' /> Submit
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}