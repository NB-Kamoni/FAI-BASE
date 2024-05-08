// Bookings.js
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';

const Bookings = ({ onSelectBooking }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [name, setName] = useState('');
    const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/veterinarians')
            .then(response => response.json())
            .then(data => {
                setTimeSlots(data?.availability); // Use optional chaining to prevent errors if data is undefined
            })
            .catch(error => console.error('Error fetching time slots:', error));
    }, []);

    const handleShowCalendar = () => {
        setShowCalendar(true);
    };

    const handleDateChange = date => {
        setSelectedDate(date);
    };

    const handleTimeChange = e => {
        setSelectedTime(e.target.value);
    };

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Check if all necessary information is provided
        if (selectedTime && name) {
            // Format booking data
            const bookingData = {
                date: selectedDate,
                time: selectedTime,
                name: name
            };
            // Pass booking data to parent component
            onSelectBooking(bookingData);
            setIsBookingSuccessful(true);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="bookings">
            {/* Button to show calendar */}
            {!showCalendar && (
                <button onClick={handleShowCalendar}>Book Consultation</button>
            )}
            {/* Calendar */}
            {showCalendar && (
                <>
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                    {/* Time selection */}
                    <select value={selectedTime} onChange={handleTimeChange}>
                        <option value="">Select Time</option>
                        {timeSlots && timeSlots.map(slot => ( // Check if timeSlots is not undefined before mapping
                            <option key={slot} value={slot}>{slot}</option>
                        ))}
                    </select>
                    {/* Name input */}
                    <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
                    {/* Submit button */}
                    <button onClick={handleSubmit}>Book Appointment</button>
                    {/* Display booking status */}
                    {isBookingSuccessful && <p>Booking Successful!</p>}
                </>
            )}
        </div>
    );
};

export default Bookings;
