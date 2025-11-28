import {Pressable, StyleSheet} from 'react-native';
import {getCurrentLocation} from '../utils/location';
import { Ionicons } from '@expo/vector-icons';

export default function GeoButton({setWaitBool, setUserLocation, setErrLog})
{
	return (
	<Pressable 
		onPress = {() =>{getCurrentLocation(setUserLocation, setErrLog, setWaitBool)}}	
		style = {styles.GeoButton}
	>
	<Ionicons name = "location-outline" size = {27}/>
	</Pressable>
	)
}

const styles = StyleSheet.create(
		{
			GeoButton:
			{
				height : 60,
				width : 80,
				padding : 12,
				alignItems: "center",
				justifyContent : "center",
				backgroundColor: "#F1F3E0",
			},
		}
);
