import {View, Text, TextInput, StyleSheet, Pressable, Alert} from 'react-native';
import GeoButton from './geoButton';
import {useState, useEffect} from 'react';

export default function TopBar({userInput, setUserInput, setUserLocation}) { 
	const [waitBool, setWaitBool] = useState(false);
	const [errLog, setErrLog] = useState("");
	return (
	<View style = {styles.container}>
		<TextInput
		onChangeText = {setUserInput}
		placeholder = "Search location"
		value = {userInput}
		style = {[styles.textInputDesign]}
		/>
		<GeoButton setWaitBool={setWaitBool} setUserLocation={setUserLocation} setErrLog={setErrLog}/>
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
		}
);
