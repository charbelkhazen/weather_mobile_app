import {View, Text, TextInput, StyleSheet} from 'react-native'
import {useState} from 'react'

//HOW CAN I USE TYPESCRIPT HERE 
//USE TEXT INPUT PROPS

export default function TopBar({style}) {
	const [input, setInput] = useState("");
	return (
		<TextInput
		onChangeText = {setInput}
		placeholder = "Search location"
		value = {input}
		style = {[styles.textInputDesign, style]}
		/>
	);
};

const styles = StyleSheet.create(
		{
			textInputDesign : 
			{
				borderRadius: 10,
				paddingHorizontal: 12,
				paddingVertical: 8,
				backgroundColor :"#F1F3E0",
			}
		}
);
