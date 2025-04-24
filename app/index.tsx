import { Text, View, Pressable} from "react-native";
import React,{useState} from "react";

export default function Index() {
  const [score, setscore] = useState(0);
  return (
    // make button and show score
    <View>
      <Text style={{ fontSize: 32, marginBottom: 20 }}>{score}</Text>
  <Pressable
    onPress={() => setscore (score + 1)}
    style={({ pressed }) => ({
      backgroundColor: pressed ? 'lightgray' : 'skyblue',
      padding: 10,
    })}
  >
    <Text>Click here</Text>
  </Pressable>

    </View>
  );
}
