import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  StatusBar,
  Alert,
} from 'react-native';
import {ButtonComponent} from '../components/Button';
// import {ModalCase} from '../components/Modal';
import {SkillCard} from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
  date?: Date;
}

export default function Home() {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    Alert.alert('Deseja excluir essa skill?');
    setMySkills(oldState => oldState.filter(skill => skill.id !== id));
  }

  useEffect(() => {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.title}>Welcome, Danielle</Text>
      <Text style={styles.greetings}>{greeting}</Text>
      <TextInput
        placeholder="New skyll"
        placeholderTextColor="#555"
        style={styles.input}
        onChangeText={setNewSkill}
      />
      <ButtonComponent
        onPress={handleAddNewSkill}
        activeOpacity={0.7}
        title="Add"
      />
      <Text style={[styles.title, {marginTop: 30, marginBottom: 20}]}>
        My Skills
      </Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
      {/* <ModalCase /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greetings: {
    color: 'white',
  },
});
