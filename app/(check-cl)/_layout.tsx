import ButtonHeaderBack from "@/components/navigation/ButtonHeaderBack";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useNavigation } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const Layout = () => {
  const navigation = useNavigation();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerBackground: () => <LinearGradient colors={["#4c669f", "#3b5998", "#192f6a"]} style={styles.linear} />,
          headerShown: true,
          headerTitle: "Cheque CL",
          headerBackTitle: "Atrás", // Para iOS
          headerBackTitleVisible: true, // Para iOS
          headerTintColor: "blue",
          headerLeft: () => <ButtonHeaderBack />,
        }}
      />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({
  headerBackground: {
    backgroundColor: "red",
    height: 100,
  },
  linear: {
    flex: 1,
    height: "100%",
    width: "100%",
  },
});
