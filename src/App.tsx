import React from 'react';
import './App.scss';
import Menu from './Menu/Menu';
import ContentContainer from './ContentContainer/ContentContainer';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <ContentContainer></ContentContainer>
    </div>
  );
}

export default App;
