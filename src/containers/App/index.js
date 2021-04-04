// Core
import { useEffect, useState } from 'react';

// Components
import { Header } from '../../components/Header';

// Containers
import { OrderContainer } from '../OrderContainer';

function App() {

  return (
    <div className="App">
      <Header />
      <OrderContainer />
    </div>
  );
}

export default App;
