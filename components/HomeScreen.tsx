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
                
            }); 