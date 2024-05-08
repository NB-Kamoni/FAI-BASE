import React from 'react';

function Veterinarians({ veterinarians }) {
    return (
        <div>
            <h2>Available Veterinary Officers</h2>
            <ul>
                {veterinarians.map(vet => (
                    <li key={vet.id}>
                        <h4>{vet.name}</h4>
                        <p>Contact: {vet.contact}</p>
                        <p>Phone: {vet.phone}</p>
                        <p>Specializations: {vet.specializations.join(', ')}</p>
                        <p>License: {vet.license}</p>
                        <p>Availability:</p>
                        <ul>
                            {Object.entries(vet.availability).map(([day, time]) => (
                                <li key={day}>{day}: {time}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Veterinarians;
