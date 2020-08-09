import React, { useState } from 'react';
import {View , ScrollView, Text} from 'react-native';
import { Feather} from '@expo/vector-icons'

import styles from './styles';
import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';


function TeacherList(){


    const [isfilterVisible, setIsFilterVisible ] = useState(false);

    function headleToggleFiltersVisible(){
            setIsFilterVisible(!isfilterVisible);
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
                        placeholder="Qual a matéria?"
                        placeholderTextColor="#c1bccc"
                        
                    /> 

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Dia da semana</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual o dia?"
                            placeholderTextColor="#c1bccc"
                        /> 
                        </View>

                        <View style={styles.inputBlock}>
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Qual horário?"
                            placeholderTextColor="#c1bccc"
                            
                        /> 
                        </View>
                    </View>
                       <RectButton style={styles.submitButton}>
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
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
            <TeacherItem/>
        </ScrollView>
        </ScrollView>
        
    </View>
    );
}

export default TeacherList;     