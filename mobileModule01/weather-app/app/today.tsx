import {Text, StyleSheet, View} from "react-native";
import PagerView from "react-native-pager-view";
import TopBar from "../components/topBar"
import { SafeAreaView } from "react-native-safe-area-context";
import {useState} from "react";

// why tabs with swipe name ????? REMOVE IT
const BG = "#B7B89F"
export default function TabsWithSwipe() {
	const [userTextInput, setUserTextInput] = useState("");
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1, backgroundColor: "#F1F3E0"}}>
      {/*<TopBar userTextInput={userTextInput} setUserTextInput={setUserTextInput}/>*/}
      <View style={styles.container}>
        <Text style={styles.title}>{userTextInput ? userTextInput : "TODAY" }</Text>
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
