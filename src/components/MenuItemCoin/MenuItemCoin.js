import { func, shape } from 'prop-types';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { formatPrice, SHAPE } from '../../common';
import { Consumer } from '../../context';
import styles from './MenuItemCoin.style';

const MenuItem = ({
  dataSource: {
    name, percent_change_1h: change, price_usd: price, symbol,
  },
  onPress,
}) => (
  <Consumer>
    { ({ favorites = [] }) => (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
          <Text style={[styles.text, styles.check]}>
            { favorites.includes(symbol) ? '✔' : '' }
          </Text>
          <Text style={[styles.text, styles.symbol]}>{symbol}</Text>
          <Text style={[styles.text, styles.name]}>{name}</Text>
          <Text style={[styles.text, styles.price, styles[change > 0 ? 'green' : 'red']]}>
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
