import {View, Text, TextInput} from 'react-native'
import {useState} from 'react'

//HOW CAN I USE TYPESCRIPT HERE 
//USE TEXT INPUT PROPS

export default function TopBar() {
	const [input, setInput] = useState("");
	return (
		<TextInput
		onChangeText = {setInput}
		placeholder = "Search location"
		value = {input}
		/>
	);
};
