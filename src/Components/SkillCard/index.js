import React from 'react';

import {View, TouchableOpacity, Text} from 'react-native';

import {styles} from './styles';

export function SkillCard({skill}) {
  return (
    <View>
      <TouchableOpacity  style={styles.buttonSkill}>
        <Text style={styles.textSkill}>{skill}</Text>
      </TouchableOpacity>
    </View>
  );
}
