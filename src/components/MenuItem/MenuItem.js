import { func, string } from 'prop-types';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './MenuItem.style';

const MenuItem = ({
  onPress, title,
}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

MenuItem.propTypes = {
  onPress: func,
  title: string,
};

MenuItem.defaultProps = {
  onPress: undefined,
  title: undefined,
};

export default MenuItem;
