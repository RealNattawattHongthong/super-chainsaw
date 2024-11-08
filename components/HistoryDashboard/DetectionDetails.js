import React from 'react';

const DetectionDetails = ({ detection, onClose }) => {
  if (!detection) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Detection Details</h2>
        <p><strong>Timestamp:</strong> {detection.timestamp}</p>
        <p><strong>Status:</strong> {detection.status}</p>
        <p><strong>Type:</strong> {detection.type}</p>
        <p><strong>Duration:</strong> {detection.duration}</p>
        <p><strong>Metadata:</strong> {detection.metadata}</p>
      </div>
    </div>
  );
};

export default DetectionDetails;
