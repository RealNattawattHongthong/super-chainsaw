import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import DetectionDetails from './DetectionDetails';
import Charts from './Charts';
import ExportButton from './ExportButton';

const HistoryDashboard = () => {
  const [detections, setDetections] = useState([]);
  const [searchFilters, setSearchFilters] = useState({
    keyword: '',
    dateRange: { start: null, end: null },
    status: '',
    type: '',
    sortBy: 'date',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDetection, setSelectedDetection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch detections data from API or other source
    // setDetections(fetchedData);
  }, []);

  const handleSearch = (filters) => {
    setSearchFilters(filters);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleDetectionClick = (detection) => {
    setSelectedDetection(detection);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const filteredDetections = detections
    .filter((detection) => {
      // Apply search filters
      return true; // Placeholder for actual filtering logic
    })
    .sort((a, b) => {
      // Apply sorting
      return 0; // Placeholder for actual sorting logic
    });

  const paginatedDetections = filteredDetections.slice(
    (currentPage - 1) * 10,
    currentPage * 10
  );

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <Charts data={filteredDetections} />
      <ExportButton data={filteredDetections} />
      <ul>
        {paginatedDetections.map((detection) => (
          <li key={detection.id} onClick={() => handleDetectionClick(detection)}>
            {detection.timestamp} - {detection.status}
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredDetections.length / 10)}
        onPageChange={handlePageChange}
      />
      {isModalOpen && (
        <DetectionDetails
          detection={selectedDetection}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HistoryDashboard;
