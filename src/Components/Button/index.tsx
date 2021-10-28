import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';

type ButtonProps = TouchableOpacityProps;

export function Button({...rest}: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
