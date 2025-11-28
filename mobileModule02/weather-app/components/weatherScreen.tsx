import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {useState} from "react";
import TopBar from "../components/topBar"
import { SafeAreaView } from "react-native-safe-area-context";

export default function WeatherScreen({backgroundColor, pageTitle}) {
	const [userLocation, setUserLocation] = useState("");
	const [userInput, setUserInput] = useState("");
	let coordinates;
	return (
		<SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: "#F1F3E0"}}>
		<TopBar userInput={userInput} setUserInput={setUserInput} setUserLocation={setUserLocation}/>
		<View style={[styles.container, { backgroundColor }]} >
		<Text style={styles.title}>{pageTitle}</Text>
		</View>
		</SafeAreaView>
		);
	}

const styles = StyleSheet.create({
	container: {
	flex : 1,
	justifyContent: 'center',
	alignItems: 'center',
	},
	title: {
		fontSize: 50,
		color : "#F1F3E0",
		},
	});
