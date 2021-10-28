import React, {useEffect, useState} from 'react';

import {View, Text, TextInput, FlatList} from 'react-native';

import {Button} from '../../Components/Button';
import {SkillCard} from '../../Components/SkillCard';

import {styles} from './styles';

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    //oldState vai receber o estado anterior e adicionar o novo, utiliza-se o spread operator (...) pra receber as informações que estão dentro do estado
    setMySkills(oldState => [...oldState, newSkill]);
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good morning ya');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening fam');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, boy</Text>
      <Text style={styles.greetings}>{greeting}</Text>
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
