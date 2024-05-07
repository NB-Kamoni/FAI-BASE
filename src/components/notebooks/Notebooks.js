import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Notebooks.css';



const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
                <div className="content-card">
                    {/* Content Goes Here */}
                  <h1>Shem and Haron</h1>
                </div>
            </div>
       
    );
};

export default Dashboard;
