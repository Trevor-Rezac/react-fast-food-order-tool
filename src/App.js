
import { useState } from 'react';
import './App.css';
import NameInput from './NameInput';
import FoodDropdown from './FoodDropdown';


function App() {

  const [customerName, setCustomerName] = useState('Customer');
  const [foodId, setFoodId] = useState(1);

  console.log('||', foodId);

  return (
    <div className="App">
      <h2>Order for: {customerName}</h2>
      <NameInput setCustomerName={setCustomerName}></NameInput>

      <div className='order-form'>
        <FoodDropdown setFoodId={setFoodId}></FoodDropdown>
      </div>
    </div>
  );
}

export default App;
