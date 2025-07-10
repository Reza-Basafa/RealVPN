import React, { useEffect, useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function ServerSelector() {
  const [servers, setServers] = useState([]);
  const [bestServer, setBestServer] = useState(null);
  const [loading, setLoading] = useState(false);
  let cancelled = false;

  useEffect(() => {
    axios.get('https://realvpn.com/api/servers.php')
      .then(res => setServers(res.data))
      .catch(err => console.log(err));
  }, []);

  const measureLatency = async (ip) => {
    const start = Date.now();
    try {
      await fetch(`http://${ip}/ping`);
      return Date.now() - start;
    } catch (e) {
      return Infinity;
    }
  };

  const selectBestServer = async () => {
    setLoading(true);
    let fastest = null;
    let minTime = Infinity;

    for (const server of servers) {
      if (cancelled) break;
      const latency = await measureLatency(server.ip);
      if (latency < minTime) {
        minTime = latency;
        fastest = server;
      }
    }

    setBestServer(fastest);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🌐 انتخاب بهترین سرور</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#00ffcc" />
      ) : bestServer ? (
        <Text style={styles.result}>سرور منتخب: {bestServer.location} - {bestServer.ip}</Text>
      ) : (
        <Text>هنوز انتخابی انجام نشده</Text>
      )}
      <Button title="شروع انتخاب خودکار" onPress={() => { cancelled = false; selectBestServer(); }} />
      <Button title="لغو عملیات" color="#ff4444" onPress={() => { cancelled = true; setLoading(false); }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#121212', flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { color: '#00ffcc', fontSize: 22, marginBottom: 20 },
  result: { color: '#ffffff', fontSize: 18, marginTop: 20 }
});
