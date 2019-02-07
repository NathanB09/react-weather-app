import React from 'react';
import './Form.css'

const Form = ({ handleSubmit }) => {
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='input' type='text' name='city' placeholder='City...' />
      <input className='input' type='text' name='country' placeholder='Country...' />
      <button className='btn btn-outline-info'>Get Weather</button>
    </form>
  );
};

export default Form;