import {Text, StyleSheet, View} from "react-native";
import Currently from "./currently";
import Today from "./today";
import Weekly from "./weekly";
import TopBar from "../components/topBar"
import { SafeAreaView } from "react-native-safe-area-context";

const BG = "#777C6D"

export default function TabsWithSwipe() {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: "#F1F3E0"}}>
      <TopBar/>
      <View style={styles.container}>
        <Text style={styles.title}>INDEX</Text>
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
		color : "white"
		}
	});
