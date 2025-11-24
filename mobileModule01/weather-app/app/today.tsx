import {Text, StyleSheet, View} from "react-native";
import PagerView from "react-native-pager-view";

export default function TabsWithSwipe() {
  return (
  	<View style = {styles.container}>
  	<Text style = {styles.title}>TODAY</Text>
	</View>
  );
}

const styles = StyleSheet.create({
	container: {
	flex : 1,
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor : "#B7B89F",

	},
	title: {
		fontSize: 50,
		color : "white"
		}
	});
