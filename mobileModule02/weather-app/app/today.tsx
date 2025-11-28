import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {useState} from "react";
import WeatherScreen from "../components/weatherScreen"
import { SafeAreaView } from "react-native-safe-area-context";

const BG = "#B7B89F"

export default function App() {
	return (
	<WeatherScreen backgroundColor={BG} pageTitle="TODAY"/>
	);
	}
