export interface ThemeLinearGradientProps {
  type: "vertical" | "horizontal";
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  children?: React.ReactNode;
}
