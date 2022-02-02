import React from 'react';

export default function FoodDropdown({ setFoodId }) {
  function handleChange(e) {
    setFoodId(e.target.value);
  }

  return <div>
    Main dish:
    <select onChange={handleChange}>
      <option value="1">Heartburn Sando</option>
      <option value="2">Veggie Sub</option>
      <option value="3">Breakfast Croissant</option>
    </select>
  </div>;
}
