import React from 'react';
import Sidebar from '../sidebar/Sidebar';
import CowsList from './CowsList'; // Component that displays a list of cows


const Cowsbook = () => {
    return (
        <div className="dashboard">
            <Sidebar /> {/* Sidebar component */}
            <div className="content-card">
                <CowsList /> {/* List of cows */}
            </div>
        </div>
    );
};

export default Cowsbook;