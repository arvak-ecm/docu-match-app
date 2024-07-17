import { ThemeLinearGradientProps } from "@/types/ThemeLinearGradientProps";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";
import { useAppSettings } from "../hooks/useContextApp";

const ThemeLinearGradient = ({
  type = "vertical",
  colors,
  start = { x: 1, y: 1 },
  end = { x: 0, y: 0 },
  locations = [1, 1],
  children,
  ...props
}: ThemeLinearGradientProps) => {
  const { paperTheme } = useAppSettings();
  const colorDefault = paperTheme.colors.linearGradient;
  return (
    <>
      {type === "vertical" ? (
        <LinearGradient colors={colors.length > 0 ? colors : colorDefault} style={[styles.default]} {...props}>
          {children}
        </LinearGradient>
      ) : (
        <LinearGradient
          colors={colors.length > 0 ? colors : colorDefault}
          style={styles.default}
          start={start}
          end={end}
          {...props}
        >
          {children}
        </LinearGradient>
      )}
    </>
  );
};

export default ThemeLinearGradient;

const styles = StyleSheet.create({
  default: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
});
