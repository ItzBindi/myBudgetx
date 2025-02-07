import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';


function LeisureList({ leisures, onDeleteLeisure, onEditLeisure }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editLeisure, setEditLeisure] = useState({ leisure: '', amount: '$' });

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditLeisure(leisures[index]);
  };

  const handleSaveEdit = () => {
    onEditLeisure(editIndex, editLeisure);
    setEditIndex(null);
  };

  const handleEditLeisureChange = (event) => {
    const { name, value } = event.target;
    setEditLeisure((prevEditLeisure) => ({ ...prevEditLeisure, [name]: value }));
  };

  return (
    <ListGroup >
      {leisures.map((leisure, index) => (
        <ListGroup.Item className='custom-font' style={{ backgroundColor: 'grey', color: 'black', borderColor: "black", fontWeight: 'bold' }} key={index} >
          {editIndex === index ? (
            <>
              <input
                className='custom-font'
                type="text"
                name="leisure"
                value={editLeisure.leisure}
                onChange={handleEditLeisureChange}
              />
              <input
                type="text"
                name="amount"
                value={editLeisure.amount}
                onChange={handleEditLeisureChange}
              />
              <a href='#' onClick={handleSaveEdit} style={{ marginRight: '25px', marginLeft: '20px' }}>✔️</a>
              <a href='#' onClick={() => setEditIndex(null)} style={{ marginLeft: '25px' }}>❌</a>
            </>
          ) : (
            <>
              {leisure.leisure} - ${leisure.amount}
              <a href='#' onClick={() => handleEditClick(index)} style={{ marginRight: '5px', marginLeft: '30px', color: 'black' }}>✎</a>
              <a href='#' onClick={() => onDeleteLeisure(index)} style={{ marginLeft: '5px' }}>🗑️</a>
            </>
          )}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default LeisureList;