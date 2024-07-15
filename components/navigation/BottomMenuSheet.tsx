import { BottomMenuSheetProps } from "@/types/BottomMenuSheetProps";
import { Colors } from "constants/Colors";
import { router } from "expo-router";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Icon } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const BottomMenuSheet: FC<{ menu: BottomMenuSheetProps[] }> = (props) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingBottom: bottom }]}>
      {props.menu.map((item, index) => (
        <Button
          key={index}
          style={[styles.btn_base]}
          onPress={() => router.navigate(item.pathName)}
          icon={({ size, color }) => <Icon source={item.icon.name} size={item.sizeIcon || size} color={color} />}
          mode="outlined"
          labelStyle={styles.btnLabel}
        >
          {item.label}
        </Button>
      ))}
    </View>
  );
};

export default BottomMenuSheet;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 26,
    gap: 14,
  },
  btnLabel: {
    fontSize: 22,
    paddingVertical: 8,
    marginBottom: 3,
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
