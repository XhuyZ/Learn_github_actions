import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from '../../src/components/Calculator';

describe('Calculator Integration Tests', () => {
  it('should perform addition correctly', () => {
    render(<Calculator />);
    
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '5' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '3' } });
    fireEvent.click(screen.getByTestId('add-btn'));
    
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 8');
  });

  it('should perform subtraction correctly', () => {
    render(<Calculator />);
    
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '10' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '4' } });
    fireEvent.click(screen.getByTestId('subtract-btn'));
    
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 6');
  });

  it('should perform multiplication correctly', () => {
    render(<Calculator />);
    
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '6' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '7' } });
    fireEvent.click(screen.getByTestId('multiply-btn'));
    
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 42');
  });

  it('should perform division correctly', () => {
    render(<Calculator />);
    
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '15' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '3' } });
    fireEvent.click(screen.getByTestId('divide-btn'));
    
    expect(screen.getByTestId('result')).toHaveTextContent('Result: 5');
  });

  it('should handle division by zero error', () => {
    render(<Calculator />);
    
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '10' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '0' } });
    fireEvent.click(screen.getByTestId('divide-btn'));
    
    expect(screen.getByTestId('error')).toHaveTextContent('Error: Division by zero is not allowed');
  });

  it('should clear all inputs and results', () => {
    render(<Calculator />);
    
    fireEvent.change(screen.getByTestId('num1-input'), { target: { value: '5' } });
    fireEvent.change(screen.getByTestId('num2-input'), { target: { value: '3' } });
    fireEvent.click(screen.getByTestId('add-btn'));
    fireEvent.click(screen.getByTestId('clear-btn'));
    
    expect(screen.getByTestId('num1-input')).toHaveValue(null);
    expect(screen.getByTestId('num2-input')).toHaveValue(null);
    expect(screen.queryByTestId('result')).not.toBeInTheDocument();
  });
});
