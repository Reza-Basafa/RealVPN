import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutReal() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>🔐 درباره Real VPN</Text>
      <Text style={styles.section}>
        در دنیایی که داده‌ها ارزشمندتر از طلا هستند، ما در Real VPN ایستاده‌ایم تا حریم خصوصی را حفظ کنیم.
      </Text>
      <Text style={styles.section}>
        این اپلیکیشن هیچ‌گونه لاگ‌برداری نمی‌کنه، اطلاعاتی ذخیره نمی‌کنه، و فقط برای یک هدف ساخته شده: اتصال امن و واقعی.
      </Text>
      <Text style={styles.section}>
        طراحی مدرن، عملکرد حرفه‌ای و امنیت بالا رو با هم ترکیب کردیم تا تجربه‌ای “واقعی” بسازیم.
      </Text>
      <Text style={styles.signature}>© 2025 Real VPN — تمامی حقوق محفوظ است.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#121212', padding: 20 },
  title: { color: '#00ffff', fontSize: 26, marginBottom: 20, textAlign: 'center' },
  section: { color: '#cccccc', fontSize: 16, marginBottom: 15, lineHeight: 24 },
  signature: { textAlign: 'center', color: '#777777', fontSize: 14, marginTop: 40 }
});
