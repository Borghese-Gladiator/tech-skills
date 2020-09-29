import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import SkillPage from './pages/SkillPage'

function App() {
  return (
    <div className="App">
      <Header />
      <SkillPage />
      <Footer />
    </div>
  );
}

export default App;
