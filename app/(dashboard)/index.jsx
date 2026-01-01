import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PillCard from '../../components/PillCard';
import EditModal from '../../components/EditModal';

export default function HomeScreen() {
  const [pills, setPills] = useState([
    {
      name: 'Aspirin',
      count: 10,
      interval: { value: 8, unit: 'hour' },
    },
    {
      name: 'Vitamin D',
      count: 20,
      interval: { value: 1, unit: 'day' },
    },
  ]);

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPill, setSelectedPill] = useState(null);
  const [modalMode, setModalMode] = useState('');
  const [tempValue, setTempValue] = useState('');
  const [tempUnit, setTempUnit] = useState('hour');

  const openModal = (index, mode) => {
    setSelectedPill(index);
    setModalMode(mode);

    if (mode === 'interval') {
      setTempValue(String(pills[index].interval.value));
      setTempUnit(pills[index].interval.unit);
    } else {
      setTempValue(String(pills[index][mode]));
    }

    setModalVisible(true);
  };

  const confirmChange = () => {
    const updated = [...pills];

    if (modalMode === 'name') {
      updated[selectedPill].name = tempValue;
    } else if (modalMode === 'count') {
      updated[selectedPill].count = Number(tempValue);
    } else if (modalMode === 'interval') {
      updated[selectedPill].interval = {
        value: Number(tempValue),
        unit: tempUnit,
      };
    }

    setPills(updated);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health App</Text>

      {pills.map((pill, index) => (
        <PillCard
          key={index}
          title={`Pill ${index + 1}`}
          {...pill}
          onChangeName={() => openModal(index, 'name')}
          onChangeCount={() => openModal(index, 'count')}
          onChangeInterval={() => openModal(index, 'interval')}
        />
      ))}

      <EditModal
        visible={modalVisible}
        title="تنظیم مقدار"
        mode={modalMode}
        value={tempValue}
        unit={tempUnit}
        onChangeValue={setTempValue}
        onChangeUnit={setTempUnit}
        onConfirm={confirmChange}
        onCancel={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 41,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
});
