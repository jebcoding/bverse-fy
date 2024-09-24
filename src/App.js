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
        <h4 id='title'>Bible Verse For You</h4>
            <div className='verse-display'>
              <p>Your verse will appear here.</p>
            </div>
      </div>
      <VerseBut />
    </div>
  );
}
export default App;