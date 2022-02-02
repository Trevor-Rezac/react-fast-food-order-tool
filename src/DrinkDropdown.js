import React from 'react';

export default function DrinkDropdown({ setDrinkId }) {
  function handleChange(e) {
    setDrinkId(e.target.value);
  }
  return <div>
      Drink:
    <select onChange={handleChange}>
      <option value='1'>Soda</option>
      <option value='2'>Coffee</option>
      <option value='3'>OJ</option>
    </select>
  </div>;
}
