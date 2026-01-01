import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

const DashboardLayout = () => {
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