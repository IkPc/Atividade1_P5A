import React from 'react';
import { View } from 'react-native-web';
import Contador from '../components/Contador';
import Atv2 from '../components/atividade2';
import Atv3 from '../components/atividade3';
import Atv4 from '../components/atividade4';
import Atv5 from '../components/atividade5';

const Home = () => {
  return (
    <div>
      <View>
        <center><h2>Página Inicial</h2></center>
        <Contador />
        <Atv2 />
        <Atv3 />
        <Atv4 />
        <Atv5 />
      </View>
    </div>
  );
};

export default Home;
