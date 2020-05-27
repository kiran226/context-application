import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/ThemeToggle';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <Booklist/>
        <ToggleTheme/>
      </ThemeContextProvider> 
    </div>
  );
}

export default App;
