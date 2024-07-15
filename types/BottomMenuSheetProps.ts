import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ComponentProps } from "react";
import { Icon } from "react-native-paper";

export interface BottomMenuSheetProps {
  pathName: string;
  icon: IconProps<ComponentProps<typeof Icon>["source"]>;
  label: string;
  sizeLabel?: number;
  sizeIcon?: number;
}
