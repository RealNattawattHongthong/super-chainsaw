# super-chainsaw

## History Dashboard for Detection UI

The History Dashboard for Detection UI is a feature in the Next.js application that allows users to view and interact with the history of past detections. It includes the following components and features:

### Components

1. **HistoryDashboard.js**
   - Main component displaying the list of past detections with timestamps, status, and pagination.
   - Imports and uses `SearchBar`, `Pagination`, `DetectionDetails`, `Charts`, and `ExportButton` components.
   - Manages state for detections, search filters, and pagination.

2. **SearchBar.js**
   - Component for the search bar to filter detections by date, keyword, detection status, and detection type.
   - Supports advanced search functionality including keyword search, date range filtering, detection status filtering, detection type filtering, and sorting options.

3. **Pagination.js**
   - Component for pagination to navigate through the history.
   - Manages state for current page and total pages.

4. **DetectionDetails.js**
   - Component to display detailed information for each detection in a modal or separate page.
   - Manages state for selected detection and modal visibility.

5. **Charts.js**
   - Component to display interactive charts and graphs to visualize detection trends over time.
   - Uses a chart library like Chart.js or Recharts.

6. **ExportButton.js**
   - Component to enable users to export the history data to CSV or other formats.
   - Adds functionality to export filtered and sorted data.

### Features

- **Display List of Detections**: Shows a list of past detections with timestamps and status.
- **Search Bar**: Allows users to filter detections by date, keyword, detection status, and detection type.
- **Pagination**: Provides pagination for easy navigation through the history.
- **Detection Details**: Allows users to click on a detection to view more detailed information in a modal or separate page.
- **Interactive Charts**: Adds interactive charts and graphs to visualize detection trends over time.
- **Export Data**: Enables users to export the history data to CSV or other formats for further analysis.

### Usage

To use the History Dashboard for Detection UI, import and include the `HistoryDashboard` component in your Next.js application. The component will handle fetching and displaying the detection history, as well as providing search, pagination, and export functionality.

```jsx
import HistoryDashboard from '../components/HistoryDashboard/HistoryDashboard';

const HomePage = () => {
  return (
    <div>
      <h1>Detection History</h1>
      <HistoryDashboard />
    </div>
  );
};

export default HomePage;
```

### Installation

To install the necessary dependencies for the History Dashboard, run the following command:

```bash
npm install recharts
```

### Contributing

If you would like to contribute to the development of the History Dashboard for Detection UI, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with a descriptive message.
4. Push your changes to your forked repository.
5. Create a pull request to the main repository.

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
