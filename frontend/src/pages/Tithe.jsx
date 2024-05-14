import React, { useState } from 'react';

function TitheCalculator() {
  const [rows, setRows] = useState([{ date: '', amount: '', description: '' }]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [titheAmount, setTitheAmount] = useState(0);
  const [savedData, setSavedData] = useState([]);

  const handleInputChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);

    const updatedTotalAmount = updatedRows.reduce((sum, row) => sum + parseFloat(row.amount || 0), 0);
    setTotalAmount(updatedTotalAmount);
    setTitheAmount(updatedTotalAmount * 0.1);
  };

  const addRow = () => {
    setRows([...rows, { date: '', amount: '', description: '' }]);
  };

  const saveData = () => {
    const newSavedData = [...savedData, ...rows];
    setSavedData(newSavedData);
    setRows([{ date: '', amount: '', description: '' }]);
  };

  return (

    <div>
      <div className="inner-banner">
        <section className="w3l-breadcrumb">
          <div className="container">
            <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2"> Tithe </h4>
            <ul className="breadcrumbs-custom-path">
              <li>
              <a href="/dashboard">Dashboard</a>
              </li>
              <li className="active">
                <span className="fa fa-chevron-right mx-2" aria-hidden="true" /> Tithe
              </li>
            </ul>
          </div>
        </section>
      </div>
      <div className="tithe-form">
        {rows.map((row, index) => (
          <div key={index} className="tithe-row">
            <label htmlFor={`date-${index}`}>Date:</label>
            <input
              type="date"
              id={`date-${index}`}
              name="date"
              value={row.date}
              onChange={(e) => handleInputChange(index, 'date', e.target.value)}
            />
           <label htmlFor={`amount-${index}`}>Amount  (<span>&#8358;</span>)</label>
            <input
              type="number"
              id={`amount-${index}`}
              name="amount"
              value={row.amount}
              onChange={(e) => handleInputChange(index, 'amount', e.target.value)}
            />
            <label htmlFor={`description-${index}`}>Description:</label>
            <input
              type="text"
              id={`description-${index}`}
              name="description"
              value={row.description}
              onChange={(e) => handleInputChange(index, 'description', e.target.value)}
            />
          </div>
        ))}
           <div className="button-container">
          <button className="form-button" onClick={addRow}>Add Row</button>
          <button className="form-button" onClick={saveData}>Save Data</button>
        </div>
      </div>
      <div className="tithe-total">
        <p>Total Amount: <span id="total-amount">&#8358;{totalAmount.toFixed(2)}</span></p>
        <p>Tithe (10%): <span id="tithe-amount">&#8358;{titheAmount.toFixed(2)}</span></p>
      </div>
      <div className="saved-data">
        <h2>Saved Data</h2>
        {savedData.map((data, index) => (
          <React.Fragment key={index}>
          <div key={index} className="saved-row">
            <p>Date: {data.date}</p>
            <p>Amount: {data.amount}</p>
            <p>Description: {data.description}</p>
          </div>
          {index !== savedData.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
};

export default TitheCalculator;