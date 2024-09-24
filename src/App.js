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
              <p>"<span id='versetext'>For God so love the world that he gave is only begotten son,
                that who ever believes on him should not perish, But have eternal life</span>"</p>
              <p id='verses'>JOHN : 3:16</p>
            </div>
      </div>
      <VerseBut />
    </div>
  );
}
export default App;