import ThemeStack from "@/components/navigation/ThemeStack";
import React from "react";

export default function LayoutConfig() {
  return <ThemeStack stacks={[{ name: "index", title: "Configuración" }]} />;
}
