import React, { useState } from 'react';
import './App.css';
import AnimatedBackground from './components/AnimatedBackground';
import IDE from './components/IDE';
import ExerciseViewer from './components/ExerciseViewer';
import LoginForm from './components/LoginForm';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="App">
      <AnimatedBackground />
      <button data-testid="login-toggle-button" className="login-toggle" onClick={() => setIsLoginOpen(!isLoginOpen)}>
        {isLoginOpen ? 'Close' : 'Login'}
      </button>
      <main className="main-container">
        <div className="ide-container">
          <IDE />
        </div>
        <div className="exercise-container">
          <ExerciseViewer />
        </div>
        <div className={`login-container ${isLoginOpen ? 'open' : ''}`}>
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default App;
