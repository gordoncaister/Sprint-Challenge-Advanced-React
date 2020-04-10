import React from 'react';
import DataFetcher from "./Components/DataFetcher"
import {useColours} from "./Hooks/useColours"

import './App.css';

function App() {
  const {theme, toggleTheme} = useColours();
  return (
    <div 
    style={{
      background: theme === 'dark' ? '#000' : '#fff',
      color: theme === 'dark' ? '#fff' : '#000',
    }}
    className="App"
    >
      <h1>List of Women's World Cup Ranked by Interest</h1>
      <button type="button" onClick={toggleTheme}>
					Switch theme
			</button>
      <DataFetcher  />
    </div>
  );
}

export default App;
