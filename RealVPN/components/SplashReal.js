import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default function SplashReal({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // بعد از 3 ثانیه وارد صفحه اصلی میشه
      navigation.replace('Home');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView source={require('../assets/splash-cyber.json')} autoPlay loop style={{ width: 200, height: 200 }} />
      <Text style={styles.title}>Real VPN</Text>
      <Text style={styles.subtitle}>Experience the Real. Stay Secure.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0f0f0f', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 32, color: '#00ffff', marginTop: 20 },
  subtitle: { fontSize: 16, color: '#cccccc', marginTop: 10 }
});
