import { useAppSettings } from "@/hooks/useContextApp";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TabBarIcon } from "./TabBarIcon";

const ButtonHeaderBack = () => {
  const { paperTheme } = useAppSettings();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
        <TabBarIcon name="chevron-back" style={[styles.icon, { color: paperTheme.colors.text }]} />
        <Text style={[styles.label, { color: paperTheme.colors.text }]}>Atrás</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonHeaderBack;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
  },
  icon: {
    fontSize: 18,
  },
});
