import React from 'react';

const Form = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='city' placeholder='City...' />
      <input type='text' name='country' placeholder='Country...' />
      <button>Get Weather</button>
    </form>
  );
};

export default Form;