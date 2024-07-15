import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, StyleSheet } from "react-native";

export default function index() {
  const [checked, setChecked] = useState(false);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<TabBarIcon size={210} name="code-slash" />}
    >
      <ThemedView>
        <ThemedText type="title">Configuración</ThemedText>
      </ThemedView>

      <ThemedView>
        <Pressable
          style={[styles.checkboxBase, checked && styles.checkboxChecked]}
          onPress={() => setChecked(!checked)}
        >
          {checked && <Ionicons name="checkmark" size={24} color="white" />}
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "coral",
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "coral",
  },
});
