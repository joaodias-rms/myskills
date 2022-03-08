import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TextInput,
  FlatList,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import {Button} from '../../Components/Button';
import {SkillCard} from '../../Components/SkillCard';

import {styles} from './styles';

export interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    if (newSkill.length === 0) {
      Alert.alert('The field is empty', 'Insert a skill');
    } else {
      //oldState vai receber o estado anterior e adicionar o novo, utiliza-se o spread operator (...) pra receber as informações que estão dentro do estado
      setMySkills(oldState => [...oldState, data]);
    }
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <>
          <Text style={styles.title} testID="welcome">
            Welcome, boy
          </Text>
          <Text style={styles.greetings}>{greeting}</Text>
          <TextInput
            testID="input-new"
            style={styles.input}
            placeholder="New Skill"
            placeholderTextColor="#555"
            onChangeText={setNewSkill}
          />
          <Button onPress={handleAddNewSkill} title="Add" testID="button-add" />

          <Text style={[styles.title, {marginVertical: 50}]}>My Skills</Text>

          <FlatList
            data={mySkills}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <SkillCard
                skill={item.name}
                onPress={() => {
                  handleRemoveSkill(item.id);
                }}
              />
            )}
          />
        </>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
