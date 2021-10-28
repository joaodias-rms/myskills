import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

export function Button({onPress}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={onPress}
        >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
