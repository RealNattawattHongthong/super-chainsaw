import React from 'react';
import { CSVLink } from 'react-csv';

const ExportButton = ({ data }) => {
  const headers = [
    { label: 'Timestamp', key: 'timestamp' },
    { label: 'Status', key: 'status' },
    { label: 'Type', key: 'type' },
    { label: 'Duration', key: 'duration' },
    { label: 'Metadata', key: 'metadata' },
  ];

  const csvData = data.map((detection) => ({
    timestamp: detection.timestamp,
    status: detection.status,
    type: detection.type,
    duration: detection.duration,
    metadata: detection.metadata,
  }));

  return (
    <CSVLink data={csvData} headers={headers} filename="detection_history.csv">
      Export to CSV
    </CSVLink>
  );
};

export default ExportButton;
