import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const AssetModal = ({show, onClose}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleClick = () => {
        // send request to server
        onClose();
    };

    return (
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Asset</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type='text'
                            value={name}
                            onChange={e => setName(e.target.value)} 
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Description</Form.Label>
                        <Form.Control 
                            as='textarea'
                            value={description}
                            onChange={e => setDescription(e.target.value)} 
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' onClick={handleClick}>Create</Button>
            </Modal.Footer>
        </Modal>
    )

};

export default AssetModal;