
import { useState } from 'react';
import './App.css';
import NameInput from './NameInput';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';
import DrinkDropdown from './DrinkDropdown';


function App() {

  const [customerName, setCustomerName] = useState('Customer');
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);

  console.log('||', foodId, sideId, drinkId);

  return (
    <div className="App">
      <h2>Order for: {customerName}</h2>
      <NameInput setCustomerName={setCustomerName}></NameInput>

      <div className='order-form'>
        <FoodDropdown setFoodId={setFoodId}></FoodDropdown>
        <SideDropdown setSideId={setSideId}></SideDropdown>
        <DrinkDropdown setDrinkId={setDrinkId}></DrinkDropdown>
      </div>
    </div>
  );
}

export default App;
