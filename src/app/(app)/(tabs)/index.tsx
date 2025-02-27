import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Page = () => {
  return (
    <View style={styles.container}>
      <View style={{ marginTop: 32 }}>
        <Text>Welcome to MyJournal!!!!!!</Text>

        <Link href="/challenges" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Click to see Challenges</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#660066",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default Page;
