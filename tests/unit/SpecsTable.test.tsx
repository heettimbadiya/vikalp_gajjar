import { render, screen } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import SpecsTable from '../../client/src/components/ui/SpecsTable';

// Mock data for testing
const mockSpecs = [
  {
    Model: 'VTST1',
    Size_mm: '400 x 600',
    MaxFeed_mm: '340',
    Power_kW: '30',
    CSS_mm: '40-100',
    Capacity_TPH: '16-60'
  },
  {
    Model: 'VTST2',
    Size_mm: '500 x 750',
    MaxFeed_mm: '425',
    Power_kW: '55',
    CSS_mm: '50-125',
    Capacity_TPH: '40-110'
  }
];

describe('SpecsTable Component', () => {
  test('renders with spec data', () => {
    render(<SpecsTable specs={mockSpecs} />);
    
    // Check for Model column header
    expect(screen.getByText('Model')).toBeInTheDocument();
    
    // Check for data rows
    expect(screen.getByText('VTST1')).toBeInTheDocument();
    expect(screen.getByText('VTST2')).toBeInTheDocument();
  });

  test('displays correct column headers', () => {
    render(<SpecsTable specs={mockSpecs} />);
    
    expect(screen.getByText('Model')).toBeInTheDocument();
    expect(screen.getByText('Size (mm)')).toBeInTheDocument();
    expect(screen.getByText('Max Feed Size (mm)')).toBeInTheDocument();
    expect(screen.getByText('Power (kW)')).toBeInTheDocument();
    expect(screen.getByText('CSS Range (mm)')).toBeInTheDocument();
    expect(screen.getByText('Throughput (TPH)')).toBeInTheDocument();
  });

  test('applies sticky class to Model column', () => {
    render(<SpecsTable specs={mockSpecs} />);
    
    const modelHeaders = screen.getAllByText('Model');
    // Desktop table should have sticky class
    const desktopHeader = modelHeaders.find(header => 
      header.closest('table')?.classList.contains('hidden') === false
    );
    expect(desktopHeader?.closest('th')).toHaveClass('sticky');
  });

  test('renders mobile cards on small screens', () => {
    // Mock window.innerWidth for mobile
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 375,
    });

    render(<SpecsTable specs={mockSpecs} />);
    
    // Should have mobile layout elements
    const mobileElements = document.querySelectorAll('.sm\\:hidden');
    expect(mobileElements.length).toBeGreaterThan(0);
  });

  test('handles empty specs gracefully', () => {
    render(<SpecsTable specs={[]} />);
    
    // Should not crash with empty data
    expect(document.body).toBeInTheDocument();
  });

  test('handles missing optional fields', () => {
    const incompleteSpecs = [
      {
        Model: 'VTST1',
        Size_mm: '400 x 600'
        // Missing other fields
      }
    ];

    render(<SpecsTable specs={incompleteSpecs} />);
    
    expect(screen.getByText('VTST1')).toBeInTheDocument();
    expect(screen.getByText('400 x 600')).toBeInTheDocument();
  });

  test('applies alternating row colors', () => {
    render(<SpecsTable specs={mockSpecs} />);
    
    const rows = document.querySelectorAll('tbody tr');
    expect(rows[0]).toHaveClass('bg-white');
    expect(rows[1]).toHaveClass('bg-gray-50');
  });
});