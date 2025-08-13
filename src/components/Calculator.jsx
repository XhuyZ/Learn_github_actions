import React, { useState } from 'react';
import { add, subtract, multiply, divide } from '../utils/math';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleOperation = (operation) => {
    try {
      setError('');
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      
      if (isNaN(a) || isNaN(b)) {
        throw new Error('Please enter valid numbers');
      }

      let res;
      switch (operation) {
        case 'add':
          res = add(a, b);
          break;
        case 'subtract':
          res = subtract(a, b);
          break;
        case 'multiply':
          res = multiply(a, b);
          break;
        case 'divide':
          res = divide(a, b);
          break;
        default:
          throw new Error('Invalid operation');
      }
      setResult(res.toString());
    } catch (err) {
      setError(err.message);
      setResult('');
    }
  };

  const handleClear = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setError('');
  };

  return (
    <div className="calculator">
      <h1>Simple Calculator</h1>
      <div className="inputs">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First number"
          data-testid="num1-input"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second number"
          data-testid="num2-input"
        />
      </div>
      <div className="operations">
        <button onClick={() => handleOperation('add')} data-testid="add-btn">
          Add (+)
        </button>
       {/* <button onClick={() => handleOperation('multiply')} data-testid="multiply-btn"> */}
        {/*   Multiply (×) */}
        {/* </button> */}
        {/* <button onClick={() => handleOperation('divide')} data-testid="divide-btn"> */}
        {/*   Divide (÷) */}
        {/* </button> */}
        {/* <button onClick={handleClear} data-testid="clear-btn"> */}
        {/*   Clear */}
        {/* </button> */}
      </div>
      {result && (
        <div className="result" data-testid="result">
          Result: {result}
        </div>
      )}
      {error && (
        <div className="error" data-testid="error">
          Error: {error}
        </div>
      )}
    </div>
  );
};

export default Calculator;
