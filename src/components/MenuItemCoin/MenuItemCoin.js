import { func, shape } from 'prop-types';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { formatPrice, SHAPE } from '../../common';
import { Consumer } from '../../context';
import styles from './MenuItemCoin.style';

const MenuItem = ({
  dataSource: {
    name, trend, price, symbol,
  },
}) => (
  <Consumer>
    { ({ favorites = [], favoriteAdd, favoriteRemove }) => (
      <TouchableOpacity onPress={() => favorites.includes(symbol) ? favoriteRemove(symbol) : favoriteAdd(symbol)}>
        <View style={styles.container}>
          <Text style={[styles.text, styles.check]}>
            { favorites.includes(symbol) ? '✔' : '' }
          </Text>
          <Text style={[styles.text, styles.symbol]}>{symbol}</Text>
          <Text style={[styles.text, styles.name]}>{name}</Text>
          <Text style={[styles.text, styles.price, styles[trend]]}>
            {formatPrice(price)}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  </Consumer>
);

MenuItem.propTypes = {
  dataSource: shape(SHAPE.COIN).isRequired,
  onPress: func,
};

MenuItem.defaultProps = {
  onPress: undefined,
};

export default MenuItem;
