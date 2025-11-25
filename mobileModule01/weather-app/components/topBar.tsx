import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native'
import {useState, useEffect} from 'react'
import * as Location from 'expo-location';


//HOW CAN I USE TYPESCRIPT HERE 
//USE TEXT INPUT PROPS

async function getCurrentLocation(setUserLocation, setErrLog)
{
	let { status } = await Location.requestForegroundPermissionsAsync();
	if (status !== 'granted') 
	{
		setErrLog('Permission to access location was denied');
		return;
	}
	const loc = await Location.getCurrentPositionAsync({});
	const geo = await Location.reverseGeocodeAsync({
	latitude: loc.coords.latitude,
	longitude: loc.coords.longitude,
	});

	const place = geo[0];

	setUserLocation(place.city || place.region || "Unknown");
	setErrLog("");
}

function GeoButton({userLocation, setUserLocation, errLog, setErrLog})
{
	return (
	<Pressable 
		onPress = {() =>{getCurrentLocation(setUserLocation, setErrLog);}}	
		style = {styles.GeoButton}
	>
	<Text style = {styles.GeoButtonText}>{errLog ? errLog : userLocation}</Text>
	</Pressable>
	)
}

export default function TopBar({style, userTextInput, setUserTextInput, userLocation, setUserLocation, errLog, setErrLog}) {
	return (
	<View style = {styles.container}>
		<TextInput
		onChangeText = {setUserTextInput}
		placeholder = "Search location"
		value = {userTextInput}
		style = {[styles.textInputDesign, style]}
		/>
		<GeoButton userLocation={userLocation} setUserLocation={setUserLocation} errLog={errLog} setErrLog={setErrLog} />
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
				flex : 10,
				borderRadius: 10,
				paddingHorizontal: 12,
				paddingVertical: 8,
				backgroundColor :"#F1F3E0",
			},
			GeoButton:
			{
				flex: 1,
				padding : 12,
				backgroundColor: "green",
			},

			GeoButtonText :{
				color : "white",
			},
		}
);
