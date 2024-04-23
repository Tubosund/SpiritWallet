import React, { useState } from 'react';

function TitheHistory() {
  const titheData = [
    { date: '2024-04-20', amount: 100, details: 'Offering' },
    { date: '2024-04-15', amount: 50, details: 'Tithe' },
    { date: '2024-04-10', amount: 25, details: 'Donation' },
  ];

  return (
    <div>
<div className="inner-banner">
<section className="w3l-breadcrumb">
  <div className="container">
    <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">
    Tithe 
    </h4>
    <ul className="breadcrumbs-custom-path">
      <li>
        <a href="/home">Home</a>
      </li>
      <li className="active">
        <span className="fa fa-chevron-right mx-2" aria-hidden="true" />{" "}
        Tithe
      </li>
    </ul>
  </div>
</section>
</div>
return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Amount</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {titheData.map((row) => (
          <tr key={row.date}>
            <td>{row.date}</td>
            <td>{row.amount}</td>
            <td>{row.details}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
}

export default TitheHistory;