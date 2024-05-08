import React from 'react';

const BookingDetails = ({ veterinarian, date, time, name, isBookingSuccessful }) => {
    return (
        <div className="booking-details-container">
            <h3>Booking Details</h3>
            <p><strong>Veterinarian:</strong> {veterinarian ? veterinarian.name : ''}</p>
            <p><strong>Date:</strong> {date.toLocaleDateString()}</p>
            <p><strong>Time:</strong> {time}</p>
            <p><strong>Name:</strong> {name}</p>
            {isBookingSuccessful && <p><strong>Booking Status:</strong> Successful!</p>}
        </div>
    );
};

export default BookingDetails;
