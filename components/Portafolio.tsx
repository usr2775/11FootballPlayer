import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

 
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

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
  const portfolioData = [
    {
      id: '1',
      title: 'Jugador 1',
      description: 'Delantero estrella',
      imageUrl: require('../assets/image/GSB56PTIOZNGFC2GLVR6C7GAGE.jpg'), 
      characteristics: {
        tiro: 90,
        pase: 85,
        defensa: 40,
        velocidad: 88,
      },
    },
    {
      id: '2',
      title: 'Jugador 2',
      description: 'Mediocampista creativo',
      imageUrl: 'https://example.com/player2.jpg',
      characteristics: {
        tiro: 75,
        pase: 92,
        defensa: 60,
        velocidad: 78,
      },
    },
    {
      id: '3',
      title: 'Jugador 3',
      description: 'Defensor sólido',
      imageUrl: 'https://example.com/player3.jpg',
      characteristics: {
        tiro: 50,
        pase: 65,
        defensa: 85,
        velocidad: 70,
      },
    },
    {
      id: '4',
      title: 'Jugador 4',
      description: 'Veloz extremo',
      imageUrl: 'https://example.com/player4.jpg',
      characteristics: {
        tiro: 80,
        pase: 70,
        defensa: 30,
        velocidad: 95,
      },
    },
    {
      id: '7',
      title: 'Jugador 5',
      description: 'Portero imbatible',
      imageUrl: 'https://example.com/player5.jpg',
      characteristics: {
        tiro: 10,
        pase: 30,
        defensa: 80,
        velocidad: 40,
      },
    },
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
  portfolioTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#84A2C5',
  },
  portfolioItem: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#F3F3F3', 
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
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
