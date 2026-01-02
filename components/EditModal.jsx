import {
  View,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function EditModal({
  visible,
  title,
  mode, // 'name' | 'count' | 'interval'
  value,
  unit,
  onChangeValue,
  onChangeUnit,
  onConfirm,
  onCancel,
}) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.title}>{title}</Text>

          {mode === 'interval' ? (
            <View style={styles.intervalRow}>
              <Picker selectedValue={unit} onValueChange={onChangeUnit} style={styles.picker}>
                <Picker.Item label="دقیقه" value="minute" />
                <Picker.Item label="ساعت" value="hour" />
                <Picker.Item label="روز" value="day" />
              </Picker>

              <TextInput
                style={[styles.input, { flex: 1 }]}
                keyboardType="numeric"
                value={value}
                onChangeText={onChangeValue}
                placeholder="عدد"
              />
            </View>
          ) : (
            <TextInput
              style={styles.input}
              keyboardType={mode === 'name' ? 'default' : 'numeric'}
              value={value}
              onChangeText={onChangeValue}
              placeholder={mode === 'name' ? 'نام' : 'عدد'}
            />
          )}

          <View style={styles.buttons}>
            <TouchableOpacity style={styles.cancel} onPress={onCancel}>
              <Text style={styles.btnText}>بازگشت</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirm} onPress={onConfirm}>
              <Text style={styles.btnText}>تایید</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  intervalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    textAlign: 'center',
    marginBottom: 20,
  },
  picker: {
    flex: 1,
    maxWidth: 105,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: 'row',
    gap: 10,
  },
  confirm: {
    flex: 1,
    backgroundColor: '#1fc941ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  cancel: {
    flex: 1,
    backgroundColor: '#999',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
