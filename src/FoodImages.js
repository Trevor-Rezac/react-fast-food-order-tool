import React from 'react';

export default function FoodImages({ foodId, sideId, drinkId }) {
  return <div className='order-images'>
    <img className='food' src={`food-${foodId}.png`}></img>
    <img className='side' src={`side-${sideId}.png`}></img>
    <img className='drink' src={`drink-${drinkId}.png`}></img>
  </div>;
}
