import { Pressable, Text, TextInput, View } from "react-native";
import React from "react";
/* This is for importing styles if they are in a seperate file, similar to CSS */
import Styles from "../styles/page-styles";
import { Link } from "expo-router";


export default function Page() {
  const [Name, setName ,] = React.useState("");
  const [Noun, setNoun] = React.useState("");
  const [Event, setEvent] = React.useState("");


  const clearInputs = () => {
    setName("");
    setNoun("");
    setEvent("");

};

  return (
    <View style={Styles.page}>
      <Text style={Styles.title}>Assignment 1</Text>
      <Text style={Styles.subtitle}>How to play Mad Libs Hall pass</Text>
      <Text style={Styles.subtitle}>Fill in the blanks</Text>
      <TextInput
        style={Styles.input}
        onChangeText={setName}
        value={Name}
        placeholder="Name"
      />

        <TextInput
        style={Styles.input}
        onChangeText={setNoun}
        value={Noun}
        placeholder="Noun"
      />

        <TextInput
        style={Styles.input}
        onChangeText={setEvent}
        value={Event}
        placeholder="An Event"
      />


      <Link
        style={Styles.button}
        href={{
          pathname: "/page2",
          params: { Name },
          params: { Noun },
          params: { Event },
        }} asChild
      >
        <Pressable style={Styles.button}>
          <Text>Make My Hall Pass</Text>
        </Pressable>
        </Link>

        <Pressable style={Styles.button} onPress={clearInputs}>
                <Text> CLEAR </Text>
            </Pressable>

  
    </View>
  );
}
