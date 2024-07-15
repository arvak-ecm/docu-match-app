import { Colors } from "@/constants/Colors";
import { useAppSettings } from "@/hooks/useContextApp";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import ThemeLinearGradient from "../ThemeLinearGradient";
import ButtonHeaderBack from "./ButtonHeaderBack";

const ThemeStack = ({ stacks }: { stacks: { name: string; title: string }[] }) => {
  const { theme } = useAppSettings();
  return (
    <Stack
      screenOptions={{
        headerBackground: () => <ThemeLinearGradient type="vertical" />,
        headerShown: true,
        headerBackTitle: "Atrás", // Para iOS
        headerBackTitleVisible: true, // Para iOS
        headerTintColor: Colors.light.gradient.labelColor,
        headerLeft: () => <ButtonHeaderBack />,
      }}
    >
      {stacks.map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          options={{
            headerTitle: item.title,
          }}
        />
      ))}
    </Stack>
  );
};

export default ThemeStack;

const styles = StyleSheet.create({});
