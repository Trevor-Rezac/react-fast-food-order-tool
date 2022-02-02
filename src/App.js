
import { useState } from 'react';
import './App.css';
import NameInput from './NameInput';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';
import DrinkDropdown from './DrinkDropdown';
import FoodImages from './FoodImages';
import InstructionForm from './InstructionForm';


function App() {

  const [customerName, setCustomerName] = useState('Customer');
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);
  const [drinkId, setDrinkId] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState(['make it extra saucy']);

  // console.log('||', foodId, sideId, drinkId);
  console.log('||', specialInstructions);

  return (
    <div className="App">
      <h2>Order for: {customerName}</h2>

      <FoodImages foodId={foodId} sideId={sideId} drinkId={drinkId}></FoodImages>
      <div className='order-form'>
        <FoodDropdown setFoodId={setFoodId}></FoodDropdown>
        <SideDropdown setSideId={setSideId}></SideDropdown>
        <DrinkDropdown setDrinkId={setDrinkId}></DrinkDropdown>
        <NameInput setCustomerName={setCustomerName}></NameInput>
      </div>

      <InstructionForm specialInstructions={specialInstructions} setSpecialInstructions={setSpecialInstructions}></InstructionForm>
    </div>
  );
}

export default App;
