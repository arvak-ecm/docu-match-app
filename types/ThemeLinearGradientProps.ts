import { LinearGradientProps } from "expo-linear-gradient";

export type ThemeLinearGradientProps = LinearGradientProps & {
  type: "vertical" | "horizontal";
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  children?: React.ReactNode;
};
