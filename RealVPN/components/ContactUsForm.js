import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import axios from 'axios';

export default function ContactUsForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = () => {
    if (!name || !email || !message) {
      Alert.alert("خطا", "لطفاً همه فیلدها را پر کنید.");
      return;
    }

    axios.post('https://realvpn.com/api/contact.php', {
      name,
      email,
      message
    })
    .then(() => Alert.alert("ارسال شد", "پیام شما با موفقیت ارسال شد."))
    .catch(() => Alert.alert("خطا", "مشکلی در ارسال پیام وجود دارد."));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📧 تماس با تیم Real</Text>
      <TextInput
        style={styles.input}
        placeholder="نام شما"
        placeholderTextColor="#888"
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="ایمیل"
        placeholderTextColor="#888"
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, styles.messageBox]}
        placeholder="پیام شما"
        placeholderTextColor="#888"
        multiline
        numberOfLines={4}
        onChangeText={setMessage}
      />
      <TouchableOpacity style={styles.button} onPress={submitForm}>
        <Text style={styles.buttonText}>ارسال پیام</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#1a1a1a', flex: 1, padding: 20 },
  title: { color: '#00ffff', fontSize: 24, marginBottom: 30, textAlign: 'center' },
  input: { backgroundColor: '#2a2a2a', color: '#fff', padding: 10, marginBottom: 20, borderRadius: 8 },
  messageBox: { height: 100 },
  button: { backgroundColor: '#00ffcc', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#121212', fontSize: 18, fontWeight: 'bold' }
});
