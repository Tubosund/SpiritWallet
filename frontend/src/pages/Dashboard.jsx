import React from 'react';


const Dashboard = () => { 
  return (
    <div>
  <div className="inner-banner">
  <section className="w3l-breadcrumb">
    <div className="container">
      <h4 className="inner-text-title font-weight-bold text-white mb-sm-3 mb-2">
      Dashboard
      </h4>
      <ul className="breadcrumbs-custom-path">
        <li>
          <a href="/home">Home</a>
        </li>
        <li className="active">
          <a className="fa fa-chevron-right mx-2" aria-hidden="true" href ="/home">
          Sign Out
          </a>
        </li>
      </ul>
    </div>
  </section>
</div>
      {/* Dashboard content */}
      <div className="dashboard">
        <div className="boxes-container">
          {/* Tithe Box */}
          <div className="dashboard-box">
            <div className="box-header">
              <h2>{/* Display total amount and tithe amount */}
                <a href="/tithe">Tithe (10%):</a>
                </h2>
              <i className="fas fa-money-bill-alt"></i> {/* Money icon */}
               
            </div>
          </div>

          {/* Donations Box */}
          <div className="dashboard-box">
            <div className="box-header">
            <h2>
              <a href="/donations">Donations</a>
            </h2>
              <i className="fas fa-money-bill-alt"></i> {/* Money icon */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
