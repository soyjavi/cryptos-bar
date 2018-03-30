import { bool, func, string } from 'prop-types';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './MenuItem.style';

const MenuItem = ({
  onPress, title,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  </TouchableOpacity>
);

MenuItem.propTypes = {
  checked: bool,
  onPress: func,
  title: string,
};

MenuItem.defaultProps = {
  checked: false,
  onPress: undefined,
  title: undefined,
};

export default MenuItem;
