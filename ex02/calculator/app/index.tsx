import {Pressable, TextInput, Button, StyleSheet, Text, View} from 'react-native'
import {useState} from 'react'

const App = () => {
	const [text1, setText1] = useState("0");
	const [text2, setText2] = useState("0");
	return (
		<View style={{ flex : 1}}>
		<View style={styles.titlebox}>
		<Text style={styles.title}>CALCULATOR</Text>
		</View>
		<View style= {styles.midscreen}>
		<TextInput 
			style = {styles.input}
			onChangeText = {setText1}
			value = {text1}
			keyboardTypr="numeric"
		/> 
		<TextInput 
			style = {styles.input}
			onChangeText = {setText2}
			value = {text2}
			keyboardTypr="numeric"
		/> 
		</View>
		<View style = {styles.calcButtons}>
		<View style = {styles.row}>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>7</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>8</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>9</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>C</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>AC</Text>
			</Pressable>
		</View>
		<View style = {styles.row}>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>7</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>8</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>9</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>C</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>AC</Text>
			</Pressable>
		</View>
		<View style = {styles.row}>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>7</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>8</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>9</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>C</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>AC</Text>
			</Pressable>
		</View>
		<View style = {styles.row}>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>7</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>8</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>9</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>C</Text>
			</Pressable>
			<Pressable style={styles.button}>
			<Text style={styles.buttonText}>AC</Text>
			</Pressable>
		</View>
		</View>
		</View>
	);
};


const styles = StyleSheet.create({
	titlebox : {
		backgroundColor : "#3b3a39",
		justifyContent:"center",
		alignItems:"center",
		height: 80,
		},
	  title: {
    		color: "white",
    		fontSize: 20,
    		fontWeight: "bold",
		letterSpacing: 3,
  		},
	 input: {
		height: 50,
		margin: 12,
		borderWidth: 3,
		padding: 10,
		fontWeight: "bold",
		fontsize: 15,
		textAlign: "right",
		color : "grey"
		},
	midscreen: {
		backgroundColor: "#495057",
		flex : 1,
		},
	button: {
		backgroundColor : "#3b3a39",	
		flex : 1,
		justifyContent : "center",
		alignItems : "center",
		padding : 10,
	},
	buttonText : {
		color : "white",
		fontSize : 10,
		},
	row: {
		flexDirection : "row",
		justifyContent : "space-between",
		flex : 1,
	},
	calcButtons : {
		flex : 3, 
	},
});

export default App;
