import React, { useState } from 'react';
import './App.css';

const verses = [
  {
    text: "For God so loved the world that he gave his only begotten Son, that whoever believes in Him should not perish but have everlasting life.",
    reference: "John 3:16"
  },
  {
    text: "The Lord is my shepherd; I shall not want.",
    reference: "Psalm 23:1"
  },
  {
    text: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13"
  }
];

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
      Generate
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