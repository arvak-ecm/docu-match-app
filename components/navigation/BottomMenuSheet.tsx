import { BottomMenuSheetProps } from "@/types/BottomMenuSheetProps";
import { Colors } from "constants/Colors";
import { router } from "expo-router";
import React, { FC } from "react";
import { StyleSheet } from "react-native";
import { Button, Icon, useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import ThemeLinearGradient from "../ThemeLinearGradient";

const BottomMenuSheet: FC<{ menu: BottomMenuSheetProps[] }> = (props) => {
  const theme = useTheme();
  const { bottom } = useSafeAreaInsets();

  return (
    <ThemeLinearGradient type="vertical" style={[styles.container, { paddingBottom: bottom }]} colors={[]}>
      {props.menu.map((item, index) => (
        <Button
          key={index}
          style={[styles.btn_base, { backgroundColor: theme.colors.primary }]}
          onPress={() => router.navigate(item.pathName)}
          icon={({ size, color }) => <Icon source={item.icon.name} size={item.sizeIcon || size} color={color} />}
          mode="elevated"
          labelStyle={[styles.btnLabel, { color: theme.colors.onPrimary }]}
        >
          {item.label}
        </Button>
      ))}
    </ThemeLinearGradient>
  );
};

export default BottomMenuSheet;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 26,
    gap: 14,
  },
  btnLabel: {
    fontSize: 20,
    paddingVertical: 11,
    marginBottom: 3,
    color: "#000",
  },
  btn_base: {
    backgroundColor: "#fff",
  },
  btnLight: {
    backgroundColor: "#fff",
  },
  btnLightText: {
    color: "#000",
    fontSize: 20,
  },
  btnDark: {
    backgroundColor: Colors.grey,
  },
  btnDarkText: {
    color: "#fff",
    fontSize: 20,
  },
  btnOutline: {
    borderWidth: 3,
    borderColor: Colors.grey,
  },
});
