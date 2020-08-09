import React, { useState } from 'react';
import {View ,ScrollView, AsyncStorage} from 'react-native';
import styles from './styles'
import PageHeader from '../../componentes/PageHeader';
import TeacherItem, { Teacher } from '../../componentes/TeacherItem';
import { useFocusEffect } from '@react-navigation/native';

function Favorites(){

    const [favorites, setFavorites] = useState([]);

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
          if (response) {
            const favoritedTeachers = JSON.parse(response);
            
            setFavorites(favoritedTeachers);
          }
        });
      }

      useFocusEffect(() => loadFavorites());

    return <View style={styles.container}>

         <PageHeader title="meus proffys favoritos"/>

         <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16,
        }}
      >
        {favorites.map((teacher: Teacher) => {
            return (
                <TeacherItem
                key={teacher.id}
                teacher={teacher}
                favorited
                />
            );
            })}
      </ScrollView>
      </View>
}

export default Favorites;     