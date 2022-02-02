import React, { useState } from 'react';

export default function InstructionForm({ specialInstructions, setSpecialInstructions }) {

  const [instructionForm, setInstructionForm] = useState('');
  console.log('||', instructionForm);

  function handleChange(e) {
    setInstructionForm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setSpecialInstructions([...specialInstructions, instructionForm]);
    setInstructionForm('');
  }
  return <form onSubmit={handleSubmit}>
    <input required value={instructionForm} onChange={handleChange} placeholder='Special Instructions'></input>
    <button>Add Instructions</button>
  </form>;
}
