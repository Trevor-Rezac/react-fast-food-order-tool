import React from 'react';

export default function NameInput({ setCustomerName }) {
  function handleChange(e) {
    setCustomerName(e.target.value);
  }

  return <div>
    <input onChange={handleChange} placeholder='Customer Name'></input>
  </div>;
}
