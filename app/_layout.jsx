import { useEffect } from 'react';
import { Platform } from 'react-native';
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import * as Notifications from 'expo-notifications';
import API_BASE_URL from '../api';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const DashboardLayout = () => {
  async function registerForPushNotificationsAsync() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    const push_token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log('Expo Push Token:', push_token);

    // Send Push Token to backend
    fetch(`${API_BASE_URL}/register-token/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({token: push_token})
    });
  }

  useEffect(() => {
    registerForPushNotificationsAsync();

    if (Platform.OS === 'android') {
      Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
      });
    }

    const sub1 = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification Received:', notification);
    });

    const sub2 = Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification Clicked:', response);
    });

    return () => {
      sub1.remove();
      sub2.remove();
    };
  }, []);

  return (
    <Tabs screenOptions={{headerShown: false, tabBarStyle: {height: 60}}}>
      <Tabs.Screen
        name="index" 
        options={{title: 'Home', tabBarIcon: ({focused}) => (
          <Ionicons
            size={24}
            name={focused ? "home" : "home-outline"}
          />
        )}}
      />
      <Tabs.Screen 
        name="history" 
        options={{title: 'History', tabBarIcon: ({focused}) => (
          <Ionicons
            size={24}
            name={focused ? "time" : "time-outline"}
          />
        )}}
      />
    </Tabs>
  )
}

export default DashboardLayout