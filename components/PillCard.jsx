import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function PillCard({
  title,
  name,
  count,
  interval,
  is_active,
  onChangeName,
  onChangeCount,
  onChangeInterval,
})
{
  const unitLabel =
    interval.unit === 'minute'
      ? 'دقیقه'
      : interval.unit === 'hour'
      ? 'ساعت'
      : 'روز';

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.row}>
        <Text style={styles.value}>{name}</Text>
        <Text style={styles.label}>نام دارو</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.value}>{count}</Text>
        <Text style={styles.label}>تعداد باقی‌مانده</Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.value}>هر {interval.value} {unitLabel}</Text>
        <Text style={styles.label}>زمان مصرف</Text>
      </View>

      <View style={styles.row}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text style={[styles.value, { color: is_active ? '#2ecc71' : '#e74c3c' }]}>
            {is_active ? 'فعال' : 'غیرفعال'}
          </Text>
          <View style={[styles.statusDot, { backgroundColor: is_active ? '#2ecc71' : '#e74c3c' }]} />
        </View>
        <Text style={styles.label}>وضعیت</Text>
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
    marginBottom: 20,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginBottom: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 15,
    color: '#444',
  },
  value: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  actions: {
    flexDirection: 'row-reverse',
    marginTop: 16,
  },
  button: {
    flex: 1,
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    marginHorizontal: 4,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: '#fff',
  },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginHorizontal: 5,
    marginTop: 4,
  },
});
