import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import API_BASE_URL from '../api';

export default function HistoryScreen() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    setLoading(true);
    try
    {
      const response = await fetch(`${API_BASE_URL}/history`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('خطا در دریافت تاریخچه');
      }

      const result = await response.json();
      setData(result);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تاریخچه مصرف دارو</Text>

      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>نام</Text>
        <Text style={styles.headerCell}>ساعت</Text>
        <Text style={styles.headerCell}>تاریخ</Text>
        <Text style={styles.headerCell}>باقی‌مانده</Text>
      </View>

      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.time}</Text>
          <Text style={styles.cell}>{item.date}</Text>
          <Text style={styles.cell}>{item.count}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#f2f2f2',
    marginTop: 45,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  headerRow: {
    flexDirection: 'row-reverse',
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  row: {
    flexDirection: 'row-reverse',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
