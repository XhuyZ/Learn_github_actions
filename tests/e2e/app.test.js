import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../../src/App';

describe('Calculator E2E Tests', () => {
  it('should render the calculator app', () => {
    render(<App />);
    expect(screen.getByText('Simple Calculator')).toBeInTheDocument();
    expect(screen.getByTestId('num1-input')).toBeInTheDocument();
    expect(screen.getByTestId('num2-input')).toBeInTheDocument();
  });

  it('should perform complete calculation workflow', () => {
    render(<App />);
    
    // Test addition
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '10' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '5' } });
    fireEvent.click(screen.getByTestId('add-btn'));
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 15');
    
    // Clear and test multiplication
    fireEvent.click(screen.getByTestId('clear-btn'));
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '8' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '3' } });
    fireEvent.click(screen.getByTestId('multiply-btn'));
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 24');
    
    // Test error handling
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '0' } });
    fireEvent.click(screen.getByTestId('divide-btn'));
    expect(screen.getByTestId('error')).toHaveTextContent('Error: Division by zero is not allowed');
  });

  it('should handle invalid inputs gracefully', () => {
    render(<App />);
    
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: 'abc' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '5' } });
    fireEvent.click(screen.getByTestId('add-btn'));
    
    expect(screen.getByTestId('error')).toHaveTextContent('Error: Please enter valid numbers');
  });
});
