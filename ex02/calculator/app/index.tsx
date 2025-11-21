import {Pressable, TextInput, Button, StyleSheet, Text, View} from 'react-native'
import {useState} from 'react'
import { evaluate} from "mathjs"

const App = () => {
	const [text1, setText1] = useState("");
	const [text2, setText2] = useState("");

	const appendSymbol = (symbol) =>
	{
		setText1(text1 + symbol)
	}
	const clearinput = () => 
	{
		setText1("")
	}
	const removeSymbol = () => 
	{
		setText1(text1.slice(0, -1))
	}
	const setComputation = (expression) => 
	{
		console.log("in setComputation " + safe_computation(expression))
		setText2(safe_computation(expression))
	}
	const safe_computation = (expression) => 
	{
		if (!/^[0-9+\-*/().\s]+$/.test(expression)) return "Error";
		let result = 0
		try
		{
			result = String(evaluate(expression));
		}
		catch (error)
		{
			return ("Error");
		}
	return (result);
	};
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
			keyboardType="numeric"
			placeholder = "0"
			placeholderTextColor = "grey"
		/> 
		<TextInput 
			style = {styles.input}
			onChangeText = {setText2}
			value = {text2}
			keyboardType="numeric"
			placeholder = "0"
			placeholderTextColor = "grey"
		/> 
		</View>
		<View style = {styles.calcButtons}>
		<View style = {styles.row}>
			<Pressable style={styles.button} onPress={() => {appendSymbol("7")}}>
			<Text style={styles.buttonText}>7</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("8")}}>
			<Text style={styles.buttonText}>8</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("9")}}>
			<Text style={styles.buttonText}>9</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {removeSymbol()}}>
			<Text style={styles.buttonText}>C</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {clearinput()}}>
			<Text style={styles.buttonText}>AC</Text>
			</Pressable>
		</View>
		<View style = {styles.row}>
			<Pressable style={styles.button} onPress={() => {appendSymbol("4")}}>
			<Text style={styles.buttonText}>4</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("5")}}>
			<Text style={styles.buttonText}>5</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("6")}}>
			<Text style={styles.buttonText}>6</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("+")}}>
			<Text style={styles.buttonText}>+</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("-")}}>
			<Text style={styles.buttonText}>-</Text>
			</Pressable>
		</View>
		<View style = {styles.row}>
			<Pressable style={styles.button} onPress={() => {appendSymbol("1")}}>
			<Text style={styles.buttonText}>1</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("2")}}>
			<Text style={styles.buttonText}>2</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("3")}}>
			<Text style={styles.buttonText}>3</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("*")}}>
			<Text style={styles.buttonText}>×</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("/")}}>
			<Text style={styles.buttonText}>/</Text>
			</Pressable>
		</View>
		<View style = {styles.row}>
			<Pressable style={styles.button} onPress={() => {appendSymbol("0")}}>
			<Text style={styles.buttonText}>0</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol(".")}}>
			<Text style={styles.buttonText}>.</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {appendSymbol("00")}}>
			<Text style={styles.buttonText}>00</Text>
			</Pressable>
			<Pressable style={styles.button} onPress={() => {setComputation(text1)}}>
			<Text style={styles.buttonText}>=</Text>
			</Pressable>
			<Pressable style={styles.button}>
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
		flex : 2,
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
		fontSize : 15,
		},
	row: {
		flexDirection : "row",
		justifyContent : "space-between",
		flex : 1,
	},
	calcButtons : {
		flex : 3, 
		backgroundColor : "#3b3a39",	
	},
});

export default App;
