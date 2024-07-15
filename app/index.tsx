import AnimatedIntro from "@/components/AnimatedIntro";
import BottomMenuSheet from "@/components/navigation/BottomMenuSheet";
import { BottomMenuSheetProps } from "@/types/BottomMenuSheetProps";
import { StyleSheet, View } from "react-native";

const menu: BottomMenuSheetProps[] = [
	{
		pathName: "/(check-cl)",
		icon: { name: "camera" },
		label: "Rut Chile",
	},
	{
		pathName: "/(check-cl)",
		icon: { name: "camera" },
		label: "Cheque Chile",
	},
];


export default function HomePage() {
  return (
    <View style={styles.container}>
			<AnimatedIntro/>
			<BottomMenuSheet menu ={menu}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }});
