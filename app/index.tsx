import { Text, View, Pressable} from "react-native";
import React,{useState,useEffect} from "react";
import {Audio} from "expo-av";

export default function Index() {
  const [score, setscore] = useState(0);
  const [sound, setsound] = useState<Audio.Sound | null>(null);

  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/sound/testsound.mp3")
      );
      setsound(sound);
    };  

    loadSound();

    // clear sound
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const handlePress = async () => {
    setscore(score + 1);
    if (sound) {
      await sound.replayAsync(); // replay sound
    }
  };
  return (
    // make button and show score
    <View>
      <Text style={{ fontSize: 32, marginBottom: 20 }}>{score}</Text>
  <Pressable
    onPress={handlePress}
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
