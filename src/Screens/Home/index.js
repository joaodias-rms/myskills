import React, {useState} from 'react';

import {View, Text, TextInput, FlatList} from 'react-native';

import {Button} from '../../Components/Button';
import {SkillCard} from '../../Components/SkillCard';

import {styles} from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  function handleAddNewSkill() {
    //oldState vai receber o estado anterior e adicionar o novo, utiliza-se o spread operator (...) pra receber todo os restante das informações do estado
    setMySkills(oldState => [...oldState, newSkill]);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, boy</Text>
      <TextInput
        style={styles.input}
        placeholder="New Skill"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />
      <Button onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}
