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
        <MenuItem title="Settings" separator />
        <MenuItem title="About" separator />
        <MenuItem title="Quit" onPress={onQuit} />
      </View>
    )}
  </Consumer>
);


export default Menu;
