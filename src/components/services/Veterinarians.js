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
        <div className="card-container"> {/* Container for the cards */}
            <h2>Available Veterinary Officers</h2>
            {veterinarians.map((vet) => (
                <div key={vet.id} className="card" onClick={() => toggleExpanded(vet)}>
                      <div className="card-img-top ">
                        <img className="card-img" src={vet.imageUrl} alt={vet.name} /> 
                        <h4>{vet.name}</h4>
                    </div>
                        {expandedVeterinarian && expandedVeterinarian.id === vet.id && (
                            <>
                                <h6 className="card-vet-text">Contact: {vet.contact}</h6>
                                <p className="card-vet-text">Phone: {vet.phone}</p>
                                <p className="card-vet-text">Specializations: {vet.specializations.join(', ')}</p>
                                <p className="card-vet-text">License: {vet.license}</p>
                                <p className="card-vet-text">Available for booking between 7 am to 5 pm</p>
                            </>
                        )}
                     </div>
            ))}
        </div>
    );
}

export default Veterinarians;
