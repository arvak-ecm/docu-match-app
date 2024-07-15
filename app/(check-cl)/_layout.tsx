import ThemeStack from "@/components/navigation/ThemeStack";
import { useNavigation } from "expo-router";
import React from "react";

const Layout = () => {
  const navigation = useNavigation();
  return <ThemeStack stacks={[{ name: "index", title: "Cheque CL" }]} />;
};

export default Layout;
