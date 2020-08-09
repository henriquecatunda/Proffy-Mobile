import React, { useState } from 'react';
import {View , ScrollView, Text, AsyncStorage} from 'react-native';
import { Feather} from '@expo/vector-icons'

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';


function TeacherList(){

    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [isfilterVisible, setIsFilterVisible ] = useState(false);

    const [subject, setSubject] = useState('Geografia');
    const [week_day, setWeekDay] = useState('1');
    const [time, setTime] = useState('9:00');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
          if (response) {
            const favoritedTeachers = JSON.parse(response);
            const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => {
              return teacher.id;
            });
    
            setFavorites(favoritedTeachersIds);
          }
        });
      }
    
      useFocusEffect(() => {
        loadFavorites();
      })

    function headleToggleFiltersVisible(){
            setIsFilterVisible(!isfilterVisible);
    }

    async function handleFiltersSubmit() {
        
        const response = await api.get('classes', {
          params: {
            subject, week_day, time,
          },
        });
    
        setIsFilterVisible(false);
        setTeachers(response.data);
      }

    return(
     <View style={styles.container}>
        <ScrollView>
        <PageHeader title="Proffys disponíveis" 
        headerRight={ 
            <BorderlessButton onPress={headleToggleFiltersVisible}>
                <Feather name="filter" size={20} color="#fff">

                </Feather>
            </BorderlessButton>
        }>
           {isfilterVisible && ( 
            <View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        value={subject}
                        onChangeText={text => setSubject(text)}
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                        
                    /> 

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput
                            style={styles.input}
                            value={week_day}
                            onChangeText={text => setWeekDay(text)}
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc"
                        /> 
                        </View>

                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                            style={styles.input}
                            value={time}
                             onChangeText={text => setTime(text)} 
                            placeholder="Qual horário?"
                            placeholderTextColor="#c1bccc"
                            
                        /> 
                        </View>
                    </View>
                       <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                           <Text style={styles.submitButtonText}> Filtrar</Text>
                       </RectButton>
                </View>
                 )}
        </PageHeader>

        <ScrollView style={styles.teacherList}
        contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16,
        }}>
            {teachers.map((teacher: Teacher) => {
            return <TeacherItem 
            key={teacher.id} 
            teacher={teacher}
            favorited={favorites.includes(teacher.id)}/>
            })}
           
        </ScrollView>
        </ScrollView>
        
    </View>
    );
}

export default TeacherList;     