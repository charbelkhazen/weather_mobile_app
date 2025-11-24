import {Text, StyleSheet, View} from "react-native";
import Currently from "./currently";
import Today from "./today";
import Weekly from "./weekly";
import TopBar from "../components/topBar"

export default function TabsWithSwipe() {
  return (
  	<View style = {styles.container}>
  	<Text style = {styles.title}>INDEX</Text>
	<TopBar/>
  	</View>
  );
}

const styles = StyleSheet.create({
	container: {
	flex : 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor : "#777C6D",
	},
	title: {
		fontSize: 50,
		color : "white"
		}
	});
