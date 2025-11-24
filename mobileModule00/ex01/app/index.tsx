import {Pressable, StyleSheet, Text, View} from 'react-native'
import {useState} from 'react'

const App = () => {
	let name : string = "A simple text";
	const [counter, setCounter] = useState(0);
	return (
	<View style={styles.container}>
	<View style = {styles.textView}>
	<Text style = {styles.text}>{counter % 2 ? "Hello world" : "A simple text" }</Text>
	</View>
	<Pressable onPress={() => {setCounter(counter + 1); console.log("Button Pressed")}} style = {styles.buttonView}>
		<Text>Click me</Text>
	</Pressable>
	</View>);
	}

const styles = StyleSheet.create({
      container: {
        flex: 5, // Occupy all available space
        backgroundColor: '#f0f0f0', // Light gray background
        justifyContent: 'center', // Center children vertically
        alignItems: 'center', // Center children horizontally
        padding: 20, // Add padding around the content
      },
      textView : {
      	backgroundColor : "green",
	padding : 10,
	borderRadius: 10,
	width: 200,
	alignItems: "center",
	justifyContent: "center",
	marginBottom: 20,
      },
      text: {
      	color : "white",
	fontSize : 20
      },
      buttonView : {
      	backgroundColor : "#71ab7c",
	padding: 10,
	borderRadius: 10,
	},
	

	});

export default App
