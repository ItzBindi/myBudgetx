import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function ExpenseTabs() {
  const leisures = JSON.parse(localStorage.getItem('leisures')) || [];
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
  const utilities = JSON.parse(localStorage.getItem('utilities')) || [];
  const monthBudget = JSON.parse(localStorage.getItem('budget')) || [];

  const allExpenses = [...leisures, ...subscriptions, ...utilities];

const allAmounts = allExpenses.map((expense) => expense.amount);

const totalExpenses = allAmounts.reduce((a, b) => a + b, 0);

  return (
    <Card bg="dark" text="light">
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first" className='justify-content-center'>
          <Nav.Item >
            <Nav.Link href="#first">Your Budget For The Month</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#link">Your Budget After Expenses</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#tuff">Tuff</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Your Budget For This Month</Card.Title>
        <Card.Text>
        {
          totalExpenses.length === 0 ? (<h1>Budget Not Entered Yet</h1>) : (monthBudget)
        }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExpenseTabs;
