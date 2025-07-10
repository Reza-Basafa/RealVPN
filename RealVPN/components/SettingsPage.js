import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Picker, TouchableOpacity } from 'react-native';

export default function SettingsPage() {
  const [autoConnect, setAutoConnect] = useState(true);
  const [selectedProtocol, setSelectedProtocol] = useState('WireGuard');
  const [theme, setTheme] = useState('Dark');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ تنظیمات Real VPN</Text>

      <View style={styles.item}>
        <Text style={styles.label}>اتصال خودکار در وای‌فای عمومی</Text>
        <Switch value={autoConnect} onValueChange={setAutoConnect} />
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>انتخاب پروتکل</Text>
        <Picker
          selectedValue={selectedProtocol}
          style={styles.picker}
          onValueChange={(val) => setSelectedProtocol(val)}
        >
          <Picker.Item label="WireGuard" value="WireGuard" />
          <Picker.Item label="OpenVPN" value="OpenVPN" />
        </Picker>
      </View>

      <View style={styles.item}>
        <Text style={styles.label}>تم رابط کاربری</Text>
        <Picker
          selectedValue={theme}
          style={styles.picker}
          onValueChange={(val) => setTheme(val)}
        >
          <Picker.Item label="Dark" value="Dark" />
          <Picker.Item label="Cyber" value="Cyber" />
          <Picker.Item label="Light" value="Light" />
        </Picker>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>تست مجدد سرعت سرورها</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>نسخه اپ: 1.0.0 | لایسنس فعال</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#121212', flex: 1, padding: 20 },
  title: { color: '#00ffff', fontSize: 26, marginBottom: 30, textAlign: 'center' },
  item: { marginBottom: 20 },
  label: { color: '#cccccc', fontSize: 16, marginBottom: 5 },
  picker: { color: '#fff', backgroundColor: '#1a1a1a' },
  button: { backgroundColor: '#00ffcc', padding: 12, borderRadius: 10, marginTop: 20, alignItems: 'center' },
  buttonText: { fontSize: 16, fontWeight: 'bold', color: '#121212' },
  footer: { marginTop: 40, color: '#666666', textAlign: 'center' }
});
