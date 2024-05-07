import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Market.css';



const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
                <div className="content-card">
                    {/* Content Goes Here */}
                  <h1>Joy</h1>
                </div>
            </div>
       
    );
};

export default Dashboard;
