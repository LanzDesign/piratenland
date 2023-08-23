import React from 'react';
import tischeAvailability from '../data/tischeAvailability.json';

const AvailabilityStatus = ({ selectedDate, selectedTime, selectedTable }) => {
  const availabilityForDate = tischeAvailability[selectedDate];
  
  if (availabilityForDate && availabilityForDate[selectedTime]) {
    const availableTische = availabilityForDate[selectedTime];
    const isTableAvailable = availableTische.includes(selectedTable); // Überprüfen Sie, ob der ausgewählte Tisch verfügbar ist

    return (
      <div>
        {isTableAvailable ? (
          <p>Plätze verfügbar! Sie können buchen.</p>
        ) : (
          <p>Leider ist der ausgewählte Tisch nicht verfügbar.</p>
        )}
      </div>
    );
  }

  return null;
};

export default AvailabilityStatus;
