import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const PersonalInfoScreen = () => {
  const nombre = 'Chibuike';
  const carrera = 'DAM (Desarrollo de Aplicaciones Multiplataforma)';
  const gradoMedio = 'Informática';
  const edad = 19;
  const intereses = 'formarme y fomentar el uso de esta aplicación';

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../assets/image/prifile.jpg')}
        />
        <Text style={styles.title}>Información Personal</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          ¡Hola! Mi nombre es {nombre}. Soy estudiante de {' '}
          {carrera}, y previamente cursé el grado medio de {' '}
          {gradoMedio}. Actualmente tengo {edad} años.
        </Text>
        <Text style={styles.infoText}>
          En mis tiempos libres, disfruto {' '}
          {intereses}.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  infoContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 12,
    textAlign: 'justify',
  },
});

export default PersonalInfoScreen;
