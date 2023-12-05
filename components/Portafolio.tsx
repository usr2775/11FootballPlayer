import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PersonalInfoScreen from './PersonalInfoScreen';
import QRCodeScreen from './QRCodeScreen';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useAuth } from './AuthContext';

const Tab = createBottomTabNavigator();

const PortfolioItem = ({ title, description, imageUrl, characteristics }) => (
  <View style={styles.portfolioItem}>
    <Image source={imageUrl} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      {characteristics && (
        <View style={styles.characteristicsContainer}>
          <Text style={styles.characteristicText}>Tiro: {characteristics.tiro}</Text>
          <Text style={styles.characteristicText}>Pase: {characteristics.pase}</Text>
          <Text style={styles.characteristicText}>Defensa: {characteristics.defensa}</Text>
          <Text style={styles.characteristicText}>Velocidad: {characteristics.velocidad}</Text>
        </View>
      )}
    </View>
  </View>
);

const Portfolio = () => {
  const { user } = useAuth(); 

  if (!user) {
    return (
      <View style={styles.container}>
        <Text style={styles.notLoggedInText}>Por favor, inicia sesión para ver el portfolio.</Text>
      </View>
    );
  }

  const portfolioData = [
  ];

  return (
    <Tab.Navigator>
      <Tab.Screen name="Informacion Personal" component={PersonalInfoScreen} />
      <Tab.Screen name="Código QR" component={QRCodeScreen} />
      <Tab.Screen
        name="Jugadores"
        component={() => (
          <View style={styles.container}>
            <Text style={styles.portfolioTitle}>Mi Portafolio</Text>
            <FlatList
              data={portfolioData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <PortfolioItem
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                  characteristics={item.characteristics}
                />
              )}
            />
          </View>
        )}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000000',
  },
  notLoggedInText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginTop: 20,
  },
  portfolioTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#84A2C5',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    resizeMode: 'cover',
  },
  textContainer: {
    flex: 1,
    padding: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000', 
  },
  description: {
    fontSize: 14,
    color: '#666161', 
  },
  characteristicsContainer: {
    marginTop: 8,
  },
  characteristicText: {
    fontSize: 12,
    color: '#333333', 
  },
  
});

export default Portfolio;