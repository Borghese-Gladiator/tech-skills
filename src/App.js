import React from 'react';
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SkillPage from './pages/SkillPage'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <SkillPage />
      <Footer />
    </div>
  );
}

export default App;
