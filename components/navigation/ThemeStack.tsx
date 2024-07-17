import { useAppSettings } from "@/hooks/useContextApp";
import { Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import ThemeLinearGradient from "../ThemeLinearGradient";
import ButtonHeaderBack from "./ButtonHeaderBack";

const ThemeStack = ({ stacks }: { stacks: { name: string; title: string }[] }) => {
  const { paperTheme } = useAppSettings();
  return (
    <Stack
      screenOptions={{
        headerBackground: () => <ThemeLinearGradient type="vertical" colors={[]} />,
        headerShown: true,
        headerBackTitle: "Atrás", // Para iOS
        headerBackTitleVisible: true, // Para iOS
        headerTintColor: paperTheme.colors.text,
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
