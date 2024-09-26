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
      <h4 id='title'>
          Bible Verse For You
          <img src='./assets/tm logo.png' id='tclogo'/>
        </h4>
            <div className='verse-display'>
              <p><b>"</b><span id='versetext'>For God so love the world that he gave is only begotten son,
                that who ever believes on him should not perish, But have eternal life</span><b>"</b></p>
              <p id='verses'><span id='book'>JOHN</span> <span id='chapter'>3</span>:<span id='verse'>16</span></p>
            </div>
      </div>
      <VerseBut />
    </div>
  );
}
export default App;