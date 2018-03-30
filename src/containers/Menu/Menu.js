import React from 'react';
import { View } from 'react-native';

import { Consumer } from '../../context';
import { MenuItem } from '../../components';
import styles from './Menu.style';

const Menu = () => (
  <Consumer>
    { ({ dataSource = [], onQuit }) => (
      <View style={styles.container}>
        { dataSource.map(coin => <MenuItem key={coin} title={coin} checked />) }
        <MenuItem title="Quit" onPress={onQuit} />
      </View>
    )}
  </Consumer>
);


export default Menu;
