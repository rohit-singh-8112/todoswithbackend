import React from 'react'
import { useContext } from 'react';
import ThemeContext from '../store/ThemeContext';

const Counts = () => {
  const {Item} = useContext(ThemeContext);
  return (
    <div className='border border-success p-1 mb-2 border-opacity-75 text-warning bg-dark text-bold w-25'>Counts: {Item.length}</div>
  )
}

export default Counts