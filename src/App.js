import React from 'react';
import Principal from './components/Principal';
import { Layout, FilterContainer, CartContainer } from './style';

function App() {
  return (
      <Layout>
        <FilterContainer/>
        <Principal/>
        <CartContainer/>
      </Layout>
  );
}

export default App;
