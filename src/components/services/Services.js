// Dashboard.js
import React, { useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Services.css';
import Veterinarians from './Veterinarians';
import useVeterinarianSearch from './useVeterinarianSearch';
import Bookings from './Bookings';

const Dashboard = () => {
    const [veterinaries, setVeterinaries] = useState([]);
    const [dataFetched, setDataFetched] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());

    const fetchData = () => {
        fetch('http://localhost:4000/veterinarians')
            .then(response => response.json())
            .then(data => {
                setVeterinaries(data);
                setDataFetched(true); // Set dataFetched to true
            })
            .catch(error => console.error('Error fetching data:', error));
    };

    const handleFetchData = () => {
        if (!dataFetched) {
            fetchData();
        }
    };

    const { filteredData, handleSearchInputChange } = useVeterinarianSearch(veterinaries);

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content-card">
                {/* Button to fetch data */}
                {!dataFetched && (
                    <button onClick={fetchData}>Fetch Veterinaries</button>
                )}

                {/* Search input */}
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by specialization..."
                    onChange={(e) => handleSearchInputChange(e.target.value)}
                />

                {/* Booking component */}
                <Bookings onSelectDate={handleDateChange} />

                {/* Render Veterinarians component */}
                {dataFetched && (
                    <Veterinarians veterinarians={filteredData} />
                )}
            </div>
        </div>
    );
};

export default Dashboard;
