
import { useState } from 'react';
import './App.css';
import NameInput from './NameInput';
import FoodDropdown from './FoodDropdown';
import SideDropdown from './SideDropdown';


function App() {

  const [customerName, setCustomerName] = useState('Customer');
  const [foodId, setFoodId] = useState(1);
  const [sideId, setSideId] = useState(1);

  console.log('||', foodId, sideId);

  return (
    <div className="App">
      <h2>Order for: {customerName}</h2>
      <NameInput setCustomerName={setCustomerName}></NameInput>

      <div className='order-form'>
        <FoodDropdown setFoodId={setFoodId}></FoodDropdown>
        <SideDropdown setSideId={setSideId}></SideDropdown>
      </div>
    </div>
  );
}

export default App;
