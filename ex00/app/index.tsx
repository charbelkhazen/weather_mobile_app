import { Text, View, Pressable } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
      >
      	<View
		style={{
			backgroundColor: "#8ca819",
			padding: 10,
			borderRadius: 6,
			}}
	>
      	<Text style={{color: "white", fontSize:30}}>A  simple text</Text>
	</View>
	<Pressable
	  onPress={() => console.log("Button Pressed")}
	  style={{
	    backgroundColor: "#d5d6d0",
	    paddingHorizontal: 20,
	    paddingVertical: 10,
	    borderRadius: 8,
	    marginTop: 20,
	  }}
	>
	  <Text style={{ color: "#8ca819" }}>Click me</Text>
	</Pressable>
	</View>
  );
};
