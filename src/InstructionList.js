import React from 'react';
import Instruction from './Instruction';

export default function InstructionList({ specialInstructions }) {
  return <div className='instruction-list'>
    Instructions:
    {specialInstructions.map((instruction, i) => <Instruction key={`${instruction}-${i}`} instruction={instruction}/>)}
  </div>;
}
