import { Tabs} from 'expo-router';
import {StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function TabLayout() {
  return (
    <Tabs

	screenOptions={{
	tabBarStyle: { backgroundColor: "#F1F3E0" },
	tabBarActiveTintColor: "black",      // when selected
	tabBarInactiveTintColor: "#555",     // when not selected
	tabBarLabelStyle: { fontWeight: "bold" }, // makes text bold
	}}
	style = {styles.tabDesign}>
    	<Tabs.Screen name="index"
		options = {{title : "anything",
		headerShown : false,
		tabBarIcon: () => (
		<FontAwesome name="sun-o" size={24} color="black" />)}}/>
    	<Tabs.Screen name="today"
		options = {{title : "Today",
		headerShown : false,
		tabBarIcon: () => (
		<MaterialIcons name="today" size={24} color="black" />),
		}}/>
    	<Tabs.Screen name="weekly"
		options = {{title : "Weekly",
		headerShown : false,
		tabBarIcon: () => (
		<MaterialCommunityIcons name="calendar-week" size={24} color="black" />)
		}}/>
    </Tabs>
  );
}

const styles = StyleSheet.create({tabDesign : {color : "black"}});
