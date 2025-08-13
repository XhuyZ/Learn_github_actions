import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../../src/utils/math';

describe('Math Utils', () => {
  describe('add function', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    it('should add zero', () => {
      expect(add(5, 0)).toBe(5);
    });

    it('should throw error for non-number inputs', () => {
      expect(() => add('a', 2)).toThrow('Both arguments must be numbers');
    });
  });

  describe('subtract function', () => {
    it('should subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it('should handle negative results', () => {
      expect(subtract(3, 5)).toBe(-2);
    });

    it('should throw error for non-number inputs', () => {
      expect(() => subtract(null, 2)).toThrow('Both arguments must be numbers');
    });
  });

  describe('multiply function', () => {
    it('should multiply two numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    it('should handle multiplication by zero', () => {
      expect(multiply(5, 0)).toBe(0);
    });

    it('should throw error for non-number inputs', () => {
      expect(() => multiply(undefined, 2)).toThrow('Both arguments must be numbers');
    });
  });

  describe('divide function', () => {
    it('should divide two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    it('should handle decimal results', () => {
      expect(divide(7, 2)).toBe(3.5);
    });

    it('should throw error for division by zero', () => {
      expect(() => divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    it('should throw error for non-number inputs', () => {
      expect(() => divide('test', 2)).toThrow('Both arguments must be numbers');
    });
  });
});
