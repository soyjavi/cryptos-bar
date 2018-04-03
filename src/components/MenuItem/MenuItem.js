import { func, shape, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { formatPrice, SHAPE } from '../../common';
import { Consumer } from '../../context';
import styles from './MenuItem.style';

class MenuItem extends PureComponent {
  state = {
    hover: false,
  }

  render() {
    const {
      props: {
        onPress, title, dataSource: {
          symbol, name, trend, price,
        } = {},
      },
      state: { hover },
    } = this;

    const styleText = StyleSheet.flatten([styles.text, hover && styles.textHover]);

    return (
      <Consumer>
        { ({ favorites = [], favoriteAdd, favoriteRemove }) => (
          <TouchableOpacity
            onMouseEnter={() => this.setState({ hover: true })}
            onMouseLeave={() => this.setState({ hover: false })}
            onPress={() => onPress}
            style={[styles.row, styles.container, hover && styles.hover]}
          >
            { title && <Text style={[styleText, styles.title]}>{title}</Text> }
            { symbol &&
              <View style={styles.row}>
                <Text style={[styleText, styles.monospace, styles.check]}>
                  { favorites.includes(symbol) ? '✔' : '' }
                </Text>
                <Text style={[styleText, styles.monospace, styles.symbol]}>{symbol}</Text>
                <Text style={[styleText, styles.monospace, styles.name]}>{name}</Text>
                <Text style={[styleText, styles.monospace, styles.price, !hover && styles[trend]]}>
                  {formatPrice(price)}
                </Text>
              </View> }
          </TouchableOpacity>
          )}
      </Consumer>
    );
  }
}

MenuItem.propTypes = {
  dataSource: shape(SHAPE.COIN),
  onPress: func,
  title: string,
};

MenuItem.defaultProps = {
  dataSource: undefined,
  onPress: undefined,
  title: undefined,
};

export default MenuItem;
