import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {useState} from "react";
import WeatherScreen from "../components/weatherScreen"
import { SafeAreaView } from "react-native-safe-area-context";

const BG = "#C5C7BC"

export default function App() {
	return (
	<WeatherScreen backgroundColor={BG} pageTitle="WEEKLY"/>
	);
	}
