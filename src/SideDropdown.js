import React from 'react';

export default function SideDropdown({ setSideId }) {

  function handleChange(e) {
    setSideId(e.target.value);
  }

  return <div>
    Side:
    <select onChange={handleChange}>
      <option value='1'>Tater Tots</option>
      <option value='2'>French Fries</option>
      <option value='3'>Apple Slices</option>
    </select>
  </div>;
}
