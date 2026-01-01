import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PillCard({
  title,
  name,
  count,
  interval,
  onChangeName,
  onChangeCount,
  onChangeInterval,
}) {
  const unitLabel =
    interval.unit === 'minute'
      ? 'دقیقه'
      : interval.unit === 'hour'
      ? 'ساعت'
      : 'روز';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>نام دارو</Text>
        <Text style={styles.value}>{name}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>تعداد باقی‌مانده</Text>
        <Text style={styles.value}>{count}</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>فاصله مصرف</Text>
        <Text style={styles.value}>
          {interval.value} {unitLabel}
        </Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.button} onPress={onChangeName}>
          <Text style={styles.buttonText}>✏️ نام</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onChangeCount}>
          <Text style={styles.buttonText}>🔢 تعداد</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={onChangeInterval}>
          <Text style={styles.buttonText}>⏰ زمان</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: {
    color: '#666',
  },
  value: {
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    marginTop: 14,
  },
  button: {
    flex: 1,
    backgroundColor: '#eeeeee',
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});
