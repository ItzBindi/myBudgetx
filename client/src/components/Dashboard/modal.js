import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import './style.css';

function ModalDash() {
  const [show, setShow] = useState(false);
  const [budget, setBudget] = useState('');
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSave = () => {
    // Check if the input is a valid number with decimals
    if (!isNaN(budget)) {
      // Save the budget to local storage
      localStorage.setItem('budget', budget);
      handleClose();
      window.location.reload();
    } else {
      // Display an error or alert for invalid input
      alert('Please enter a valid number.');
    }
    console.log(budget);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
      Enter Your Budget For the Month
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className='custom-modal-body'>Enter Your Budget For the Month</Modal.Title>
        </Modal.Header>
        <Modal.Body className='custom-modal-body'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Control
                type="text"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDash;
