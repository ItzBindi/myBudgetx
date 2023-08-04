import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';

function ExpenseTabs() {
  const leisures = JSON.parse(localStorage.getItem('leisures')) || [];
  const subscriptions = JSON.parse(localStorage.getItem('subscriptions')) || [];
  const utilities = JSON.parse(localStorage.getItem('utilities')) || [];
  const monthBudget = JSON.parse(localStorage.getItem('budget')) || 0 ;

  const formattedMonthBudget = monthBudget.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const allExpenses = [...leisures, ...subscriptions, ...utilities];

  const allAmounts = allExpenses.map((expense) => parseFloat(expense.amount));

  const totalExpenses = allAmounts.reduce((a, b) => a + b, 0);
  const formattedTotalExpenses = totalExpenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  const remainingBudget = monthBudget - totalExpenses;
  const formattedRemainingBudget = remainingBudget.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

  return (
    <Card bg="dark" text="light">
      <Card.Header>
        <Nav variant="pills" defaultActiveKey="#first" className='justify-content-center'>
          <Nav.Item >
            <Nav className="brkdwnFnt">Your Monthly Breakdown</Nav>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {
            monthBudget === 0 ? (
              <h1>Budget Not Entered Yet</h1>
            ) : (
              <>
                <h1 className="hello">Your Budget For This Month: {formattedMonthBudget}</h1>
                <h1 className="hello">Your Total Expenses: {formattedTotalExpenses}</h1>
                <h1 className="hello">Your Budget After Expenses: {formattedRemainingBudget}</h1>
              </>
            )
          }
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ExpenseTabs;
