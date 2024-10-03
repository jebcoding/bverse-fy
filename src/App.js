import React, { useState } from 'react';
import './App.css';
import verses from './verse.json';

function BibleVerseGenerator() {
  const [verse, setVerse] = useState(verses[Math.floor(Math.random() * verses.length)]);
  return (
    <div className='container'>
      <div className='content'>
      <h4 id='title'>
          Bible Verse For You
          <img src='./assets/tm logo.png' id='tclogo'/>
        </h4>
            <div className='verse-display'>
              <p><b>"</b><span id='versetext'>{verse.text}</span><b>"</b></p>
              <p id='verses'>{verse.reference}</p>
            </div>
      </div>
      <button className='button-29' onClick={() => setVerse(verses[Math.floor(Math.random() * verses.length)])}>
      Next Verse
    </button>
    </div>
  );
}
export const App = () => {
  return (
    <div><BibleVerseGenerator/></div>  
  );
}
export default App;