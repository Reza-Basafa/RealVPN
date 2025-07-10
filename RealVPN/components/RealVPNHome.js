import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function RealVPNHome() {
  const [connected, setConnected] = useState(false);
  const [ip, setIP] = useState("185.92.34.10");
  const [location, setLocation] = useState("Germany");
  const [dataUsed, setDataUsed] = useState("0 MB");

  const toggleConnection = () => {
    setConnected(!connected);
    setDataUsed(connected ? "0 MB" : "2.4 MB");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐 Real VPN</Text>
      <View style={styles.statusBox}>
        <Text style={styles.status}>وضعیت: {connected ? "متصل" : "قطع شده"}</Text>
        <Text style={styles.info}>IP: {ip}</Text>
        <Text style={styles.info}>مکان سرور: {location}</Text>
        <Text style={styles.info}>دیتای مصرفی: {dataUsed}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, connected ? styles.connected : styles.disconnected]}
        onPress={toggleConnection}
      >
        <Text style={styles.buttonText}>{connected ? "قطع اتصال" : "اتصال امن"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: "#121212", flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, color: "#00ffff", marginBottom: 20 },
  statusBox: { marginBottom: 30 },
  status: { fontSize: 20, color: "#fff", marginBottom: 10 },
  info: { color: "#bbb", fontSize: 16 },
  button: { padding: 15, borderRadius: 12, width: 200, alignItems: "center" },
  connected: { backgroundColor: "#ff4444" },
  disconnected: { backgroundColor: "#00ffcc" },
  buttonText: { fontSize: 18, color: "#121212", fontWeight: "bold" }
});
