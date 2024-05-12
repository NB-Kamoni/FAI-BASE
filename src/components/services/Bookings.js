import React, { useState} from 'react';
import Calendar from 'react-calendar';

const Bookings = ({ veterinarians, onSelectBooking }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedVeterinarian, setSelectedVeterinarian] = useState(null);
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [isBookingSuccessful, setIsBookingSuccessful] = useState(false);
    const [bookedEvents, setBookedEvents] = useState([]); // Hold booked events

    const generateTimeSlots = () => {
        const timeSlots = [];
        const startTime = 7; //bookings start at 7
        const endTime = 17; //last booking hour during the day
        const interval = 30; // Time interval in minutes (30 minutes)
        
        for (let hour = startTime; hour <= endTime; hour++) {
            for (let minute = 0; minute < 60; minute += interval) {
                const time = new Date();
                time.setHours(hour);
                time.setMinutes(minute);
                timeSlots.push(time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
            }
        }
        return timeSlots;
    };

    const timeSlots = generateTimeSlots();

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
    const handlePhoneNumberChange = e => {
        setPhoneNumber(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        // Check if all necessary information is provided
        if (selectedTime && name && selectedVeterinarian && selectedDate) {
            // Format booking data
            const bookingData = {
                date: selectedDate,
                time: selectedTime,
                name: name,
                phoneNumber: phoneNumber,
                veterinarian: selectedVeterinarian
            };
            // Pass booking data to parent component
            onSelectBooking(bookingData);
            setIsBookingSuccessful(true);
            setBookedEvents(prevEvents => [...prevEvents, bookingData]); // Add booked event to the list
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
                    <input type="tel" placeholder="Your Phone Number" value={phoneNumber} onChange={handlePhoneNumberChange} />
                    {/* Submit button */}
                    <button onClick={handleSubmit}>Book Appointment</button>
                  
                    {/* Display booking details */}
                    {isBookingSuccessful && (
                        <div className="booked-events">
                        {bookedEvents.map((event, index) => (
                            <div key={index} className="event-card">
                                <h3>Booking Details</h3>
                                <p><strong>Veterinarian:</strong> {event.veterinarian ? event.veterinarian.name : ''}</p>
                                <p><strong>Date:</strong> {event.date.toLocaleDateString()}</p>
                                <p><strong>Time:</strong> {event.time}</p>
                                <p><strong>Name:</strong> {event.name}</p>
                                <p><strong>Phone:</strong> {event.phoneNumber}</p>
                            </div>
                        ))}
                    </div>
                    
                    )}
                    <div className='bookingSuccessful'>
                      {isBookingSuccessful && <p>Booking Successful!</p>}
                   </div>
                    
                </>
            )}
        </div>
    );
};

export default Bookings;
