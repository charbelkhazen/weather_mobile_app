import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {useState} from "react";
import WeatherScreen from "../components/weatherScreen"
import { SafeAreaView } from "react-native-safe-area-context";

const BG = "#777C6D"

export default function App() {
	return (
	<WeatherScreen backgroundColor={BG} pageTitle="INDEX"/>
	);
	}
