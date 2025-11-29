import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {useState} from "react";
import TopBar from "../components/topBar"
import BodyWeatherScreen from "../components/bodyWeatherScreen"
import { SafeAreaView } from "react-native-safe-area-context";

export default function WeatherScreen({backgroundColor, pageTitle}) {
	const [userLocation, setUserLocation] = useState("");
	const [userInput, setUserInput] = useState("");
	const [selectedLocation, setSelectedLocation] = useState(false);
	return (
		<SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: "#F1F3E0"}}>
			<TopBar userInput={userInput} setUserInput={setUserInput} setUserLocation={setUserLocation} setSelectedLocation={setSelectedLocation}/>
			<View style={[styles.container, { backgroundColor }]} >
				<BodyWeatherScreen userInput={userInput} selectedLocation={selectedLocation} setSelectedLocation={setSelectedLocation}/>
			</View>
		</SafeAreaView>
		);
	}

const styles = StyleSheet.create({
	container: {
	flex : 1,
	},
	title: {
		fontSize: 50,
		color : "#F1F3E0",
		},
	});
