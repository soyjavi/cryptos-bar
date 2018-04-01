import React from 'react';
import { ScrollView, View } from 'react-native';

import { Consumer } from '../../context';
import { MenuItem, MenuItemCoin } from '../../components';
import styles from './Menu.style';

const Menu = () => (
  <Consumer>
    { ({ coinList = [], onQuit }) => (
      <View style={styles.container}>
        <ScrollView style={styles.coinList}>
          { coinList.map(data => <MenuItemCoin key={data.id} dataSource={data} />) }
        </ScrollView>
        <View style={styles.menuOptions}>
          <MenuItem title="Quit" onPress={onQuit} />
        </View>
      </View>
    )}
  </Consumer>
);


export default Menu;
