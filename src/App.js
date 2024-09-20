import React from 'react';
import './App.css';

function VerseBut() {
  return (
    <button>
      Generate
    </button>
  );
}

export const App = () => {
  return (
    <div className='container'>
      <div className='content'>
        <h4>Messege</h4>
        <VerseBut />
      </div>
    </div>
  );
}
export default App;