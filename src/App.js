import React from 'react';
import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './context/ThemeContext';
import ToggleTheme from './components/ThemeToggle';
import AuthContextProvider from './context/AuthContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Navbar/>
          <Booklist/>
          <ToggleTheme/>
        </AuthContextProvider>
      </ThemeContextProvider> 
    </div>
  );
}

export default App;
