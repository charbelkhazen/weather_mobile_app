import {View, Text, TextInput, StyleSheet, Pressable, Alert} from 'react-native'
import {useState, useEffect} from 'react'
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';

//!!PUT LOGIC IN ANOTHER FILE 
// !! STORE THE WHOLE GEO IN A DB , MIGHT HELP WITH API WEATHER RETREIVAL (NON ARABIC )

const createAlert = () =>
	Alert.alert('Location Requirement', 'Make sure location permissions are all enabled.', [
	{text: 'OK', onPress: () => console.log('OK Pressed')},
	]);

async function getCurrentLocation(setUserLocation, setErrLog, setWaitBool)
{
	const perm = await Location.requestForegroundPermissionsAsync();
	if (perm.status !== "granted") {
	createAlert();
	console.log("Location Permissions Not Granted");
	setErrLog("Permission denied");
	return;
	}

	const gpsEnabled = await Location.hasServicesEnabledAsync();
	if (!gpsEnabled) {
	createAlert();
	console.log("Location Permissions Not Enabled");
	setErrLog("Permission denied");
	return;
	}

	setUserLocation("Tracking your location...");
	setWaitBool(true);
	const loc = await Location.getCurrentPositionAsync({});
	const geo = await Location.reverseGeocodeAsync({
	latitude: loc.coords.latitude,
	longitude: loc.coords.longitude,
	});
	const place = geo[0];
	setWaitBool(false);
	setUserLocation(place.city || place.region || place.country);
	setErrLog("");
}

function GeoButton({setWaitBool, userLocation, setUserLocation, errLog, setErrLog})
{
	return (
	<Pressable 
		onPress = {() =>{getCurrentLocation(setUserLocation, setErrLog, setWaitBool);console.log(userLocation)}}	
		style = {styles.GeoButton}
	>
	<Ionicons name = "location-outline" size = {27}/>
	{/*<Text style = {styles.GeoButtonText}>{errLog ? errLog : userLocation}</Text>*/}
	</Pressable>
	)
}

export default function TopBar({setWaitBool, style, userLocation, setUserLocation, errLog, setErrLog}) { //, userTextInput, setUserTextInput
	return (
	<View style = {styles.container}>
		<TextInput
		onChangeText = {setUserLocation}
		placeholder = "Search location"
		value = {userLocation} //what anbout removing this - understand it etter
		style = {[styles.textInputDesign, style]}
		/>
		<GeoButton setWaitBool={setWaitBool} userLocation={userLocation} setUserLocation={setUserLocation} errLog={errLog} setErrLog={setErrLog} />
	</View>
	);
};

const styles = StyleSheet.create(
		{
			container :
			{
				flexDirection : "row",
				alignItems : "center",
			},
			textInputDesign : 
			{
				height : 60,
				flex : 1,
				borderRadius: 10,
				paddingHorizontal: 12,
				paddingVertical: 8,
				backgroundColor :"#F1F3E0",
			},
			GeoButton:
			{
				height : 60,
				width : 80,
				padding : 12,
				alignItems: "center",
				justifyContent : "center",
				backgroundColor: "#F1F3E0",
			},

			GeoButtonText :{
				color : "white",
			},
		}
);
