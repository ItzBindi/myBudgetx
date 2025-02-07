import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ADD_LEISURE } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import './style.css';

function ModalLeisure({ addLubby }) {
  const [show, setShow] = useState(false);
  const [leisureAmount, setLeisureAmount] = useState(0);
  const [leisureName, setLeisureName] = useState('');
  const [addLeisure, { error }] = useMutation(ADD_LEISURE);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAmountChange = (event) => {
    const enteredValue = +event.target.value;
    // Use a regular expression to check if the entered value matches the allowed pattern.
    if (/^\d+(\.\d{0,2})?$/.test(enteredValue)) {
      setLeisureAmount(enteredValue);
    }
  };

  const handleLeisureNameChange = (event) => {
    setLeisureName(event.target.value);
  };

  const handleSaveChanges = async () => {
    const { data } = await addLeisure({
      variables: {
        price: leisureAmount,
        name: leisureName,
      }

    }); 
    // Add the new subscription to the list in the parent component (Subs.js)
    addLubby({ leisure: data.addLeisure.name, amount: data.addLeisure.price });
    handleClose();
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className='custom-button'>
        Add Leisures
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'black' }}>Add Your New Leisure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: 'black' }}>Enter Your favorite activities</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex. Netflix, Hulu, etc."
                autoFocus
                value={leisureName}
                onChange={handleLeisureNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ color: 'black' }}>Enter your activities Amount</Form.Label>
              <Form.Control
                type="number"
                value={leisureAmount}
                onChange={handleAmountChange}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSaveChanges}>
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalLeisure;