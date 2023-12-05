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


export default QRCodeScreen;
