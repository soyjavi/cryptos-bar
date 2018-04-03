import { bool, func, shape, string } from 'prop-types';
import React, { PureComponent } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { formatPrice, SHAPE } from '../../common';
import { Consumer } from '../../context';
import styles from './MenuItem.style';

class MenuItem extends PureComponent {
  state = {
    hover: false,
  }

  _onPress = ({ favorites, favoriteAdd, favoriteRemove }) => {
    const { props: { dataSource: { symbol } = {}, onPress } } = this;

    if (onPress) onPress();
    else favorites.includes(symbol) ? favoriteRemove(symbol) : favoriteAdd(symbol); // eslint-disable-line
  }

  _onToggleHover = () => {
    this.setState({ hover: !this.state.hover });
  }

  render() {
    const {
      _onPress, _onToggleHover,
      props: {
        checked, title, dataSource: {
          symbol, name, trend, price,
        } = {},
      },
      state: { hover },
    } = this;

    const text = StyleSheet.flatten([styles.text, hover && styles.textHover]);

    return (
      <Consumer>
        { ({ favorites = [], ...consumer }) => (
          <TouchableOpacity
            onMouseEnter={_onToggleHover}
            onMouseLeave={_onToggleHover}
            onPress={() => _onPress({ favorites, ...consumer })}
            style={[styles.row, styles.container, hover && styles.hover]}
          >
            <Text style={[text, styles.monospace, styles.check]}>
              { checked || favorites.includes(symbol) ? '✔' : '' }
            </Text>
            { title && <Text style={text}>{title}</Text> }
            { symbol &&
              <View style={styles.row}>
                <Text style={[text, styles.monospace, styles.symbol]}>{symbol}</Text>
                <Text style={[text, styles.monospace, styles.name]}>{name}</Text>
                <Text style={[text, styles.monospace, styles.price, !hover && styles[trend]]}>
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
  checked: bool,
  dataSource: shape(SHAPE.COIN),
  onPress: func,
  title: string,
};

MenuItem.defaultProps = {
  checked: false,
  dataSource: undefined,
  onPress: undefined,
  title: undefined,
};

export default MenuItem;
