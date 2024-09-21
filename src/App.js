import React from 'react';
import './App.css';

function VerseBut() {
  return (
    <button className='button-29'>
      Generate
    </button>
  );
}

export const App = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h4>Messege</h4>
        
      </div>
      <VerseBut />
    </div>
  );
}
export default App;