import React from 'react';
import './App.css';
import Content from './components/routes/content'
import Header from './components/routes/header'

function App() {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
}

export default App;