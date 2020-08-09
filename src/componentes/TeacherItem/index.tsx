import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles'
import { RectButton, ScrollView } from 'react-native-gesture-handler';


import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem(){

    return (

        <View style={styles.container}>
           
            <View  style={styles.profile}> 
                <Image style={styles.avatar}
                source={{uri: 'https://avatars3.githubusercontent.com/u/65199498?s=460&u=86072499fdeedfc6f7f08d29a7e710c38f44755b&v=4'}}> 
                </Image>

                    <View  style={styles.profileInfo}>
                        <Text  style={styles.name} > Henrique Catunda </Text>
                        <Text  style={styles.subject}> Quimica </Text>
                    </View>          
            </View>

            <Text style={styles.bio} >Olá, Eu sou Henrique Catunda , Es­tu­dan­te de Sis­te­mas de Informação, na Universidade Federal do Ceará(UFC) {'\n'} {'\n'}
            Atual­men­te de­sen­vol­ven­do habi­li­dades vol­tadas à área de Front-End. 
             </Text>

             <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora: {'   '}   
                    <Text style={styles.priceValue}> R$: 28,00  </Text>
                </Text> 

                <View style={styles.buttonsContainer}> 
                    <RectButton style={[styles.favoriteButton, styles.favorited]}> 
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}> 
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText} > Entrar em contato </Text>
                    </RectButton>
                </View>


             </View>
            
        </View>
    )
}

export default TeacherItem;