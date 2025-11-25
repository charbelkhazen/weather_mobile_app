import {View, Text, TextInput, StyleSheet} from 'react-native'
import {useState} from 'react'

//HOW CAN I USE TYPESCRIPT HERE 
//USE TEXT INPUT PROPS

export default function TopBar({style, userTextInput, setUserTextInput}) {
	return (
	<View>
		<TextInput
		onChangeText = {setUserTextInput}
		placeholder = "Search location"
		value = {userTextInput}
		style = {[styles.textInputDesign, style]}
		/>
	</View>
	);
};

const styles = StyleSheet.create(
		{
			textInputDesign : 
			{
				height : 60,
				borderRadius: 10,
				paddingHorizontal: 12,
				paddingVertical: 8,
				backgroundColor :"#F1F3E0",
			}
		}
);
