import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import image1 from '../assets/image/imajeFotbool.jpeg';
import { useNavigation } from '@react-navigation/native';



export function HomeScreen({  }) {


              const navigation = useNavigation();
              const handleJoinNow = () => {
              navigation.navigate('Portfolio');
              };
              return (
                <View style={styles.container}>

                  <Image source={image1} style={styles.image} />
                  <Text style={styles.title1}>{`Bienvenido ${user?.username || ''}`}</Text>
                  <Text style={styles.title}>{`A 11Players & Colecciona`}</Text>
                  <Text style={styles.description}>
                    {`Es la herramienta esencial para cualquier coleccionista de cartas que busca llevar su pasión al siguiente nivel. Ya sea que seas un coleccionista casual o apasionado. ¡Explora, organiza y comparte tus cartas como nunca antes!`}
                  </Text>
                  <TouchableOpacity style={styles.button} onPress={handleJoinNow}>
                    <Text style={styles.buttonText}>{`Join Now`}</Text>
                  </TouchableOpacity>
                </View>
              );
            }
            
const styles = StyleSheet.create({
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 1)',
                height: '50%',  
            
              },
              image: {
                width: 390,
                height: 482,
                resizeMode: 'cover',
                marginBottom: 10,
              },
              title1: {
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 30,
                fontStyle: 'normal',
                fontWeight: '700',
                alignSelf: 'flex-start',
                marginLeft: 20,
              },
              title: {
                color: 'rgba(132, 162, 197, 1)',
                fontSize: 30,
                fontStyle: 'normal',
                fontWeight: '700',
                alignSelf: 'flex-start',
                marginLeft: 20,
                marginBottom: 10,
            
              },
              description: {
                width: 332,
                height: 66,
                color: 'rgba(255, 255, 255, 1)',
                textAlign: 'center',
                fontSize: 13,
                fontStyle: 'normal',
                fontWeight: '300',
                marginBottom: 10,
                alignSelf: 'flex-start',
                marginLeft: 20,
              },
              button: {
                width: 355,
                height: 65,
                borderRadius: 20,
                backgroundColor: 'rgba(132, 162, 197, 1)',
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'flex-start',
                marginLeft: 20,
                marginBottom: 75,
            
              },
              buttonText: {
                color: 'rgba(255, 255, 255, 1)',
                fontSize: 22,
                fontStyle: 'normal',
                fontWeight: '800',
              },
            }); 