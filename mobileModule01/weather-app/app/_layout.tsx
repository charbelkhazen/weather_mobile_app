import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs>
    	<Tabs.Screen name="index"
		options = {{title : "Currently",
		tabBarIcon: () => (
		<FontAwesome name="sun-o" size={24} color="black" />)}}/>
    	<Tabs.Screen name="today"
		options = {{title : "Today",
		tabBarIcon: () => (
		<MaterialIcons name="today" size={24} color="black" />),
		}}/>
    	<Tabs.Screen name="weekly"
		options = {{title : "Weekly",
		tabBarIcon: () => (
		<MaterialCommunityIcons name="calendar-week" size={24} color="black" />)
		}}/>
    </Tabs>
  );
}
