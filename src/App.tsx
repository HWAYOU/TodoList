import './App.css';
import Template from './components/HomeComponent';
import { ThemeContext } from './ThemeContext';
import { useState } from 'react';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  //다크모드 안함//

  return (
    <div className="App">
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <Template />
      </ThemeContext.Provider>
      
    </div>
  );
}

export default App;
