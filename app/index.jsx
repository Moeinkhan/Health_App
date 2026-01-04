import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Alert, ActivityIndicator, ScrollView, RefreshControl } from 'react-native';
import PillCard from '../components/PillCard';
import EditModal from '../components/EditModal';
import API_BASE_URL from '../api';

export default function HomeScreen() {
  const [pills, setPills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPill, setSelectedPill] = useState(null);
  const [modalMode, setModalMode] = useState('');
  const [tempValue, setTempValue] = useState('');
  const [tempUnit, setTempUnit] = useState('hour');

  // ---------------- MODAL ----------------
  const openModal = (index, mode) => {
    setSelectedPill(index);
    setModalMode(mode);

    if (mode === 'interval')
    {
      setTempValue(String(pills[index].interval.value));
      setTempUnit(pills[index].interval.unit);
    }
    else
    {
      setTempValue(String(pills[index][mode]));
    }

    setModalVisible(true);
  };

  // ---------------- FETCH PILLS ----------------
  useEffect(() => {
    fetchPills();
  }, []);

  const fetchPills = async () => {
    setLoading(true);
    try
    {
      const response = await fetch(`${API_BASE_URL}/api/dashboard/`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('خطا در دریافت لیست داروها');
      }

      const data = await response.json();
      setPills(data);
    }
    catch (error) {
      console.log(error);
      Alert.alert('خطا', 'دریافت اطلاعات از سرور انجام نشد');
    }
    finally {
      setLoading(false);
    }
  };

  // ---------------- UPDATE PILL ----------------
  const confirmChange = async () => {
    const updated = [...pills];

    if (modalMode === 'name')
    {
      updated[selectedPill].name = tempValue;
    }
    else if (modalMode === 'count')
    {
      updated[selectedPill].count = Number(tempValue);
    }
    else if (modalMode === 'interval')
    {
      updated[selectedPill].interval = {
        value: Number(tempValue),
        unit: tempUnit,
      };
    }

    setPills(updated);
    setModalVisible(false);

    // Send to backend
    try {
      const response = await fetch(`${API_BASE_URL}/api/dashboard/`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updated[selectedPill]),
        }
      );

      if (!response.ok) {
        throw new Error('خطا در ذخیره تغییرات');
      }
    }
    catch (error) {
      console.log(error);
      Alert.alert('خطا', 'ذخیره تغییرات انجام نشد');
    }
  };

  // ---------------- REFRESH ----------------
  const onRefresh = async () => {
    if (refreshing) return;

    setRefreshing(true);
    await fetchPills();
    setRefreshing(false);
  };

  // ---------------- LOADING ----------------
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4a90e2" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Health App</Text>

      <ScrollView refreshControl={ 
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/> }>
        {pills.map((pill, index) => (
          <PillCard
            key={index}
            title={`محفظه دارو ${index + 1}`}
            {...pill}
            onChangeName={() => openModal(index, 'name')}
            onChangeCount={() => openModal(index, 'count')}
            onChangeInterval={() => openModal(index, 'interval')}
          />
        ))}
      </ScrollView>

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
    padding: 18,
    marginTop: 45,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 25,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
