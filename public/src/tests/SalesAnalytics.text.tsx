import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';
import SalesAnalytics from '../components/SalesAnalytics'; // Adjust the import path

// Mock Axios to simulate API requests
jest.mock('axios');

// Mock the response data for API requests
const mockSalesData = [
  // ... Define your mock sales data here
];

const mockProductData = [
  // ... Define your mock product data here
];

describe('SalesAnalytics Component', () => {
  beforeEach(() => {
    // Mock Axios response for the API requests used in useEffect
    axios.get.mockResolvedValueOnce({ data: mockSalesData });
    axios.get.mockResolvedValueOnce({ data: mockSalesData });
    axios.get.mockResolvedValueOnce({ data: mockSalesData });
  });

  it('should render SalesAnalytics component', async () => {
    render(<SalesAnalytics />);

    // Use waitFor to wait for chart components to render (async)
    await waitFor(() => {
      // Check that your chart components are rendered
      expect(screen.getByText('Sales Over Time')).toBeInTheDocument();
      expect(screen.getByText('Product Wise Sales')).toBeInTheDocument();
      expect(screen.getByText('Top Selling Products')).toBeInTheDocument();
    });
  });

  it('should display charts with data', async () => {
    render(<SalesAnalytics />);

    // Use waitFor to wait for chart components to render and fetch data (async)
    await waitFor(() => {
      // Check that your chart components have data displayed
      expect(screen.getByRole('img', { name: 'Sales Over Time' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'Product Wise Sales' })).toBeInTheDocument();
      expect(screen.getByRole('img', { name: 'Top Selling Products' })).toBeInTheDocument();
    });
  });
});
