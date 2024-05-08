// Veterinarians.js
import React, { useState } from 'react';

function Veterinarians({ veterinarians }) {
    const [expandedVeterinarian, setExpandedVeterinarian] = useState(null);

    const toggleExpanded = (vet) => {
        setExpandedVeterinarian(
            expandedVeterinarian && expandedVeterinarian.id === vet.id ? null : vet
        );
    };

    return (
        <div>
            <h2>Available Veterinary Officers</h2>
            {veterinarians.map((vet) => (
                <div key={vet.id} onClick={() => toggleExpanded(vet)} style={{ cursor: 'pointer' }}>
                    <h4>{vet.name}</h4>
                    {expandedVeterinarian && expandedVeterinarian.id === vet.id && (
                        <div className='veterinaryData'>
                            <p>Contact: {vet.contact}</p>
                            <p>Phone: {vet.phone}</p>
                            <p>Specializations: {vet.specializations.join(', ')}</p>
                            <p>License: {vet.license}</p>
                            {/* Display availability message */}
                            <p>Available for booking between 7 am to 5 pm</p>
                       </div>
                    )}
                </div>
            ))}
           
        </div>
    );
}

export default Veterinarians;
