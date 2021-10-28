import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';

type ButtonProps = TouchableOpacityProps &{
  title: string
}

export function Button({title,...rest}: ButtonProps) {
  return (
    <View>
      <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
