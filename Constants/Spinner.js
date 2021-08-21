import React from "react";
import { ActivityIndicator, StyleSheet, SafeAreaView } from "react-native";

import color from "../Constants/Colors/color";

export default function Spinner() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size="large" color={color.Secondary} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
