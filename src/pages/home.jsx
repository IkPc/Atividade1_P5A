import React from 'react';
import Contador from '../components/Contador';
import ComponentButton from '../components/ComponenteButton';
import ComponenteInput from '../components/ComponenteInput';
import MudaTema from '../components/MudaTema';

const Home = () => {
  return (
    <div>
      <center><h2>Página Inicial</h2></center>
      <Contador />
      <ComponentButton />
      <ComponenteInput />
      <MudaTema />
    </div>
  );
};

export default Home;
