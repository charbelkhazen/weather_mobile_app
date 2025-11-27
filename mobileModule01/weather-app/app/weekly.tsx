import {Text, StyleSheet, View, ActivityIndicator} from "react-native";
import {useState} from "react";
import TopBar from "../components/topBar"
import { SafeAreaView } from "react-native-safe-area-context";

const BG = "#CBCBCB"

export default function TabsWithSwipe() {
	const [userLocation, setUserLocation] = useState("");
	const [errLog, setErrLog] = useState("");
	const [waitBool, setWaitBool] = useState(false);
	return (
		<SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: "#F1F3E0"}}>
		<TopBar setWaitBool={setWaitBool} userLocation={userLocation} setUserLocation={setUserLocation} errLog={errLog} setErrLog={setErrLog}/>
		<View style={styles.container} >
		<Text style={styles.title}>WEEKLY</Text>
		{waitBool ? (
			<ActivityIndicator size="large" color="#F1F3E0" />
			) : (
			<Text style={styles.title}>{errLog ? "" : userLocation }</Text>
			)
		}
		</View>
		</SafeAreaView>
		);
	}

const styles = StyleSheet.create({
	container: {
	flex : 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor : BG,
	},
	title: {
		fontSize: 50,
		color : "#F1F3E0",
		},
	});
