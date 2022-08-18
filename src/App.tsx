import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <button data-testid='btnDefault' type='button' className='bg-rose-600 focus:outline-4 focus:ring hover:bg-rose-700 text-white font-bold rounded active:bg-rose-700 opacity-50 cursor-not-allowed'>
      Click
    </button>
    </div>
  );
}

export default App;
