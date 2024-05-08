import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import BookingDetails from './BookingDetails';

const Bookings = ({ veterinarians, onSelectBooking }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedVeterinarian, setSelectedVeterinarian] = useState(null);
    const [name, setName] = useState('');
    const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        // Fetch veterinarian availability
        fetch('http://localhost:4000/veterinarians')
            .then(response => response.json())
            .then(data => {
                // Extract time slots
                const availability = data.map(vet => Object.values(vet.availability)).flat();
                setTimeSlots(availability);
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

    const handleVeterinarianChange = e => {
        setSelectedVeterinarian(veterinarians.find(vet => vet.id === parseInt(e.target.value)));
    };

    const handleNameChange = e => {
        setName(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Check if all necessary information is provided
        if (selectedTime && name && selectedVeterinarian) {
            // Format booking data
            const bookingData = {
                date: selectedDate, // Include selected date
                time: selectedTime,
                name: name,
                veterinarian: selectedVeterinarian
            };
            // Pass booking data to parent component
            onSelectBooking(bookingData, selectedDate); // Pass selected date
            setIsBookingSuccessful(true);
        } else {
            alert('Please fill in all fields.');
        }
    };

    return (
        <div className="bookings">
            {/* Time selection */}
            <select value={selectedTime} onChange={handleTimeChange}>
                <option value="">Select Time</option>
                {timeSlots.map((slot, index) => (
                    <option key={index} value={slot}>{slot}</option>
                ))}
            </select>
            {/* Veterinarian selection */}
            <select value={selectedVeterinarian ? selectedVeterinarian.id : ''} onChange={handleVeterinarianChange}>
                <option value="">Select Veterinarian</option>
                {veterinarians.map(vet => (
                    <option key={vet.id} value={vet.id}>{vet.name}</option>
                ))}
            </select>
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
                    {/* Name input */}
                    <input type="text" placeholder="Your Name" value={name} onChange={handleNameChange} />
                    {/* Submit button */}
                    <button onClick={handleSubmit}>Book Appointment</button>
                    {/* Display booking status */}
                    {isBookingSuccessful && <p>Booking Successful!</p>}
                </>
            )}
            {/* Display Booking Details */}
            {selectedVeterinarian && selectedTime && (
                <BookingDetails
                    veterinarian={selectedVeterinarian}
                    date={selectedDate}
                    time={selectedTime}
                    name={name}
                    isBookingSuccessful={isBookingSuccessful}
                />
            )}
        </div>
    );
};

export default Bookings;
