import React from 'react';
import * as RN from 'react-native';

import {createRounds} from './src/services/teams';

const App = () => {
  const result = createRounds(['Felix', 'Seppo', 'Paavo', 'Annu', 'Fiona'], 2);
  console.log(result);
  return (
    <RN.SafeAreaView>
      <RN.Text>HELLO WORLD</RN.Text>
    </RN.SafeAreaView>
  );
};

export default App;
