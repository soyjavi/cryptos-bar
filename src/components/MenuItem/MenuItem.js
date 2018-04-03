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
        title, dataSource: {
          symbol, name, trend, price,
        } = {},
      },
      state: { hover },
    } = this;

    const styleText = StyleSheet.flatten([styles.text, hover && styles.textHover]);

    return (
      <Consumer>
        { ({ favorites = [], ...consumer }) => (
          <TouchableOpacity
            onMouseEnter={_onToggleHover}
            onMouseLeave={_onToggleHover}
            onPress={() => _onPress({ favorites, ...consumer })}
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
