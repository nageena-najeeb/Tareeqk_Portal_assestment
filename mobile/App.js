import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';

export default function App() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:8000/api/requests') // or use your IP if needed
      .then(res => setRequests(res.data))
      .catch(err => console.log('API Error:', err.message));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Towing Requests</Text>
      <FlatList
        data={requests}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>👤 {item.customer_name}</Text>
            <Text style={styles.text}>📍 {item.location}</Text>
            <Text style={styles.text}>📝 {item.note}</Text>
            <Text style={styles.status}>Status: {item.status}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 12,
    padding: 16,
    elevation: 2,
  },
  text: {
    fontSize: 16,
    marginBottom: 4,
  },
  status: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#444',
  },
});
