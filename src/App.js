import { useState, useEffect } from 'react';
import './App.css';
import AboutUs from './components/AboutUs';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const themes = {
    obsidianGlow: { background: "#1D1F21", text: "#C5C8C6", accent: "#A54242", secondaryAccent: "#8C9440", highlight: "#5F819D" },
    midnightOasis: { background: "#121212", text: "#E0E0E0", accent: "#BB86FC", secondaryAccent: "#03DAC6", highlight: "#CF6679" },
    mysticShadows: { background: "#0F0F0F", text: "#F1F1F1", accent: "#FFA500", secondaryAccent: "#FF6F61", highlight: "#7D4E57" },
    nebulaNights: { background: "#1B1B2F", text: "#E4E4F3", accent: "#6A5ACD", secondaryAccent: "#B48EAD", highlight: "#FFD700" }
  };

  const [theme, setTheme] = useState(themes.obsidianGlow);

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;
  }, [theme]);

  const handleThemeChange = (themeName) => {
    setTheme(themes[themeName]);
  };

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      setmessage('Dark Mode has been Enabled', 'Success:');
    } else {
      setMode('light');
      document.body.style.backgroundColor = theme.background;
      document.body.style.color = theme.text;
      setmessage('Light Mode has been Enabled', 'Success:');
    }
  };

  const [alert, setalert] = useState(null);

  const setmessage = (message, type) => {
    setalert({ msg: message, tp: type });
    setTimeout(() => setalert(null), 3000);
  };

  return (
    <Router>
      <Navbar
        title="TextUtils2"
        mode={mode}
        toggleMode={toggleMode}
        onThemeChange={handleThemeChange}
        theme={theme}
      />
      <Alert alert={alert} />
      <Routes>
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/" element={<TextForm />} />
      </Routes>
    </Router>
  );
}

export default App;
