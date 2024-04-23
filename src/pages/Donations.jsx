import React, { useState } from 'react';

function Donations() {
    // Similar state management and input handling as TitheSection
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState(0);
    const [details, setDetails] = useState('');
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
        case 'date':
          setDate(value);
          break;
        case 'amount':
          setAmount(parseFloat(value)); // Convert to number
          break;
        case 'details':
          setDetails(value);
          break;
        default:
          break;
      }
    };
  
    return (
      <div className="section">
        <h3>Offering</h3>
        <table>
          <tbody>
            <tr>
              <th>Date/Day</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="date"
                  placeholder="Enter date or day"
                  value={date}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <th>Amount</th>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <th>Details/Description</th>
            </tr>
            <tr>
              <td>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter details or description"
                  value={details}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

export default Donations