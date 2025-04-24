import { Text, View, Pressable} from "react-native";

export default function Index() {
  let score = 0
  return (
    <View>
  <Pressable
    onPress={() => score += 1}
    style={({ pressed }) => ({
      backgroundColor: pressed ? 'lightgray' : 'skyblue',
      padding: 10,
    })}
  >
    <Text>POP</Text>
  </Pressable>

    </View>
  );
}
