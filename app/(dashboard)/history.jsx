import { View, Text, StyleSheet } from 'react-native';

export default function HistoryScreen() {
  const data = [
    { name: "دارو 1", date: '1404/08/01', time: '10:30', remaining: 5 },
    { name: "دارو 2", date: '1404/08/02', time: '12:00', remaining: 4 },
    { name: "دارو 3", date: '1404/08/03', time: '14:15', remaining: 3 },
    { name: "دارو 4", date: '1404/08/04', time: '09:45', remaining: 2 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>تاریخچه مصرف دارو</Text>

      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>نام</Text>
        <Text style={styles.headerCell}>ساعت</Text>
        <Text style={styles.headerCell}>تاریخ</Text>
        <Text style={styles.headerCell}>باقی‌مانده</Text>
      </View>

      {data.map((item) => (
        <View key={item.name} style={styles.row}>
          <Text style={styles.cell}>{item.name}</Text>
          <Text style={styles.cell}>{item.time}</Text>
          <Text style={styles.cell}>{item.date}</Text>
          <Text style={styles.cell}>{item.remaining}</Text>
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
});
