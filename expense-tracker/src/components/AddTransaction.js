import React, { useState } from 'react';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  console.log(text);
  return (
    <>
      <h3> Add New Transaction</h3>
      <form action='' className='form-control '>
        <label htmlFor='text'>Text</label>
        <input
          type='text'
          placeholder='Enter Amount...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <div className='form-control'>
          <label htmlFor='amount'>
            Amount
            <br />
            (negative- expense, positive - income)
          </label>
          <input
            type='number'
            placeholder='Enter amount....'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  );
}

export default AddTransaction;
