import {Text, StyleSheet, View} from "react-native";
import PagerView from "react-native-pager-view";
import TopBar from "../components/topBar"
import { SafeAreaView } from "react-native-safe-area-context";

// why tabs with swipe name ????? REMOVE IT
const BG = "#B7B89F"
export default function TabsWithSwipe() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: BG }}>
      <TopBar/>
      <View style={styles.container}>
        <Text style={styles.title}>TODAY</Text>
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
