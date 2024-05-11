import React from 'react';
import Sidebar from '../sidebar/Sidebar'; 
import ChickensList from './ChickensList.js'; 


const Chickensbook = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content-card">
                <ChickensList /> 
            </div>
        </div>
    );
};

export default Chickensbook;