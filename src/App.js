import React from 'react';
import { useSelector } from 'react-redux';

import Header from './Components/Header';
import Hero from './Components/Hero';
import ProductList from './Components/ProductList';

import './App.scss';

const App = () => {
  const { results } = useSelector((state) => state.main);
  return (
    <div className="App">
     <Hero />
     <Header />
     <section className='content'>
        {Boolean(results) && (
          <div className='App__results'>Results: {results}</div>
        )}
        <ProductList />
     </section>
    </div>
  );
}

export default App;
