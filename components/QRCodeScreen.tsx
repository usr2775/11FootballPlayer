import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodeScreen = () => {
  const qrData = 'https://github.com/usr2775/Supermercado';

  return (
    <View style={styles.container}>
      <Text style={styles.qrCodeLabel}>
        Escanea el código QR para acceder a mi perfil usr2775 de GitHub:
      </Text>
      <QRCode value={qrData} size={200} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeLabel: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
    color: 'gray',
    marginBottom: 50,
  },
});
export default QRCodeScreen;