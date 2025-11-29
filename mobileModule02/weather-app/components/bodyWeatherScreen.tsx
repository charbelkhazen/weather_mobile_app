import {Text, StyleSheet,FlatList, View, ActivityIndicator, Pressable} from "react-native";
import {useState} from "react";

export default function BodyWeatherScreen({userInput, selectedLocation, setSelectedLocation}) {
	const data = ["ABC" , "AA" , "AAAB", "ABCD", "D" , "E", "bb"]
	const filtered = data.filter(x => userInput && (x.toLowerCase().startsWith(userInput.toLowerCase())));
	return(
		<View style={styles.container}>
		{ selectedLocation ? 
			<Text>SELECTED</Text> : 
			<FlatList
				data={filtered}
				contentContainerStyle={{ paddingVertical: 12 }}
				ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
				renderItem={({item}) => 
						<Pressable onPress={() => setSelectedLocation(true)} style={styles.pressable}>
						<Text>{item}</Text>
						</Pressable>}
							/>
		}
		</View>
	)
	}

const styles = StyleSheet.create({
	container: {
	flex : 1,
	},
	pressable :
	{
	padding: 12,
	padding: 12,
	borderWidth: 1,
	borderColor: "black",
	borderRadius: 6,
	}
	});
