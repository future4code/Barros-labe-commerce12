import React from 'react';
import Principal from './components/Principal';
import { ContainerFiltro } from './components/ContainerFiltro';

import { Layout,  CartContainer } from './style';


function App() {


  return (
      <Layout>
        {/* <ContainerFiltro /> */}
        <Principal />
        <CartContainer />
      </Layout>
  );
}

export default App;
