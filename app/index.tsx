import AnimatedIntro from "@/components/AnimatedIntro";
import BottomMenuSheet from "@/components/navigation/BottomMenuSheet";
import { useAppSettings } from "@/hooks/useContextApp";
import { BottomMenuSheetProps } from "@/types/BottomMenuSheetProps";
import { StyleSheet, View } from "react-native";

const menu: BottomMenuSheetProps[] = [
  {
    pathName: "/(check-cl)",
    icon: { name: "card-account-details-outline" },
    sizeLabel: 24,
    sizeIcon: 26,
    label: "Rut",
  },
  {
    pathName: "/(check-cl)",
    icon: { name: "checkbook" },
    label: "Cheque",
    sizeLabel: 24,
    sizeIcon: 26,
  },
  {
    pathName: "/(config)",
    icon: { name: "cog-outline" },
    label: "Configuración",
    sizeLabel: 24,
    sizeIcon: 26,
  },
];

export default function HomePage() {
  const { theme } = useAppSettings();

  return (
    <View style={styles.container}>
      <AnimatedIntro />
      <BottomMenuSheet menu={menu} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
