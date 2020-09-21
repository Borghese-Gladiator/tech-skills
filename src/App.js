import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SkillPage from './pages/SkillPage'

function App() {
  return (
    <div className="App">
      <Header logo={logo} />
      <SkillPage />
      <Footer />
    </div>
  );
}

export default App;
