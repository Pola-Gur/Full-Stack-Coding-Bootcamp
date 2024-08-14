import React, { useEffect } from "react";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import "../src/App.css";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <h1>Theme Switcher Example</h1>
      <ThemeSwitcher />
    </div>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
