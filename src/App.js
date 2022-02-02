
import { useState } from 'react';
import './App.css';
import NameInput from './NameInput';


function App() {

  const [customerName, setCustomerName] = useState('Customer');


  return (
    <div className="App">
      <h2>Order for: {customerName}</h2>
      <NameInput setCustomerName={setCustomerName}></NameInput>
    </div>
  );
}

export default App;
