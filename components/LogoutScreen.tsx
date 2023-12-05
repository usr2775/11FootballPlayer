// LogoutScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../components/AuthContext';

const LogoutScreen = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cerrar Sesión</Text>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.loginButtonText}>Confirmar Cierre de Sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000',
    paddingTop: 40,
  },
  title: {
    color: '#84A2C5',
    fontSize: 30,
    marginBottom: 20,
  },
  logoutButton: {
    width: 359,
    height: 59,
    borderRadius: 15,
    backgroundColor: 'red', // You can change the color according to your preference
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 15,
  },
});

export default LogoutScreen;
