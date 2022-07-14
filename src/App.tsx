import React from 'react';
import './App.css';
import Header from './containers/Header/Header';
import TransactBody from './containers/TransactionBody/TransactBody';

function App() {
  return (
    <div className="App">
     <Header name="Mathilda Imadojiemu"/>
     <TransactBody />
    </div>
  );
}

export default App;
