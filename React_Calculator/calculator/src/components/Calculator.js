import React, { useState } from 'react';
import './Calculator.css'
const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <div className='Cal'>
      <h1>Calculator</h1>
      <input className='inp' type="text" value={input} readOnly />
      <div>
      <button className='in' onClick={() => handleButtonClick('1')}>1</button>
      <button className='in' onClick={() => handleButtonClick('2')}>2</button>
      <button className='in' onClick={() => handleButtonClick('3')}>3</button>
      <button className='op' onClick={() => handleButtonClick('+')}>+</button>
      <br/>
      <button className='in' onClick={() => handleButtonClick('4')}>4</button>
      <button className='in' onClick={() => handleButtonClick('5')}>5</button>
      <button className='in' onClick={() => handleButtonClick('6')}>6</button>
      <button className='op' onClick={() => handleButtonClick('-')}>-</button><br/>

      <button className='in' onClick={() => handleButtonClick('7')}>7</button>
      <button className='in' onClick={() => handleButtonClick('8')}>8</button>
      <button className='in' onClick={() => handleButtonClick('9')}>9</button>
      <button className='op' onClick={() => handleButtonClick('*')}>*</button><br/>

      <button className='in' onClick={() => handleButtonClick('0')}>0</button>
      <button className='op' onClick={() => handleButtonClick('/')}>/</button>  
      <button className='op' onClick={handleCalculate}>=</button>
      <button className='op' onClick={handleClear}>C</button>
      </div>
      
    </div>
  );
};

export default Calculator;
