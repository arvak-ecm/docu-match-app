import { ThemeLinearGradientProps } from "@/types/ThemeLinearGradientProps";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet } from "react-native";

const ThemeLinearGradient = ({
  type = "vertical",
  colors = ["hsla(254, 74%, 65%, 1)", "hsla(276, 91%, 79%, 1)"],
  start = { x: 1, y: 1 },
  end = { x: 0, y: 0 },
  locations = [1, 1],
  children,
}: ThemeLinearGradientProps) => {
  return (
    <>
      {type === "vertical" ? (
        <LinearGradient colors={colors ?? []} style={styles.default}>
          {children}
        </LinearGradient>
      ) : (
        <LinearGradient colors={colors ?? []} style={styles.default} start={start} end={end}>
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
    justifyContent: "center",
    alignItems: "center",
  },
});
