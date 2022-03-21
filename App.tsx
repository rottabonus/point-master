import React from 'react';
import * as RN from 'react-native';

import {combinations} from './src/services/teams';

const App = () => {
  const result = combinations(
    ['Felix', 'Seppo', 'Paavo', 'Annu', 'Fiona', 'Katja'],
    3,
  );
  console.log(result);
  return (
    <RN.SafeAreaView>
      <RN.Text>HELLO WORLD</RN.Text>
    </RN.SafeAreaView>
  );
};

export default App;
