import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import { ComponentProps } from "react";

export interface BottomMenuSheetProps {
	pathName: string, 
	icon: IconProps<ComponentProps<typeof Ionicons>['name']>,	
	label: string,
}
