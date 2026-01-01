import { View, Text, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  const data = [
    { id: 1, date: '1404/08/01', time: '10:30', remaining: 5 },
    { id: 2, date: '1404/08/02', time: '12:00', remaining: 4 },
    { id: 3, date: '1404/08/03', time: '14:15', remaining: 3 },
    { id: 4, date: '1404/08/04', time: '09:45', remaining: 2 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>اطلاعات مصرف دارو</Text>

      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>تاریخ</Text>
        <Text style={styles.headerCell}>ساعت</Text>
        <Text style={styles.headerCell}>تعداد باقی‌مانده</Text>
      </View>

      {data.map((item) => (
        <View key={item.id} style={styles.row}>
          <Text style={styles.cell}>{item.date}</Text>
          <Text style={styles.cell}>{item.time}</Text>
          <Text style={styles.cell}>{item.remaining}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
  },
  headerCell: {
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});
