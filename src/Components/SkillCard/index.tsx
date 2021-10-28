import React from 'react';

import {
  View,
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
} from 'react-native';

import {styles} from './styles';

type SkillCardProps = TouchableOpacityProps & {
  skill: string;
};

export function SkillCard({skill, ...rest}: SkillCardProps) {
  return (
    <View>
      <TouchableOpacity style={styles.buttonSkill}{...rest}>
        <Text style={styles.textSkill}>{skill}</Text>
      </TouchableOpacity>
    </View>
  );
}
