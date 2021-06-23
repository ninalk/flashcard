import React from 'react';
import './RemoveCardButton.css';
import { Button, Modal, Icon } from 'semantic-ui-react';

export default function RemoveCardButton({ removeCard, card }) {
    const [open, setOpen] = React.useState(false);

    function handleDeleteClick() {
        const cardId = card._id;
        removeCard(cardId);
    }

    return (
        <>
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='mini'
            trigger={<Button className='delete-btn'>Delete</Button>}
        >
            <Modal.Content>
                <p>Are you sure you want to delete this flashcard?</p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic inverted onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' inverted onClick={() => {setOpen(false); handleDeleteClick();}} >
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
        </>
    )
}