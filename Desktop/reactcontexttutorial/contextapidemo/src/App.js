 import { useState } from 'react';
import './App.css';
import Header from './Header';
 
import ThemeContext from './ThemeContext';
import Main from './MainWithFunc'

function App() {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value = {themeHook}>
      <div>
        <Header />
        <Main />
      </div>
    </ThemeContext.Provider>
  );
}



export default App;
