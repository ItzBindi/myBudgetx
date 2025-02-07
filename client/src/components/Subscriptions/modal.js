import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './style.css';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { ADD_SUB } from '../../utils/mutations';
import { useMutation } from '@apollo/client';


function ModalSub({ addSubscription }) {
  const [show, setShow] = useState(false);
  const [subscriptionAmount, setSubscriptionAmount] = useState(0);
  const [subscriptionName, setSubscriptionName] = useState('');
  const [addSub, { error }] = useMutation(ADD_SUB);



  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAmountChange = (event) => {
    const enteredValue = +event.target.value;
    // Use a regular expression to check if the entered value matches the allowed pattern.
    if (/^\d+(\.\d{0,2})?$/.test(enteredValue)) {
      setSubscriptionAmount(enteredValue);
    }
  };

  const handleSubscriptionNameChange = (event) => {
    setSubscriptionName(event.target.value);
  };

  const handleSaveChanges = async () => {
    const { data } = await addSub({
      variables: {
        price: subscriptionAmount,
        name: subscriptionName,
      }

    }); 
    // Add the new subscription to the list in the parent component (Subs.js)
    addSubscription({ subscription: data.addSub.name, amount: data.addSub.price });
    handleClose();
  };

  return (
    <>
      <Button variant="secondary" onClick={handleShow} className='custom-button'>
        Add Subscription
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title style={{ color: 'black' }}>Add Your New Subscription</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ color: 'black' }}>Enter Your Subscription</Form.Label>
              <Form.Control
                type="text"
                placeholder="ex. Netflix, Hulu, etc."
                autoFocus
                value={subscriptionName}
                onChange={handleSubscriptionNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ color: 'black' }}>Enter Subscription Amount</Form.Label>
              <Form.Control
                type="number"
                value={subscriptionAmount}
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

export default ModalSub;




