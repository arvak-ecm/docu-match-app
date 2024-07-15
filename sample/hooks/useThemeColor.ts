/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";

import { Colors } from "@/constants/Colors";

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  if (colorFromProps) {
    console.log("🚀 ~ colorFromProps:", colorFromProps);
    return colorFromProps;
  } else {
    console.log("🚀 ~ theme:", theme);
    return Colors[theme][colorName];
  }
}
