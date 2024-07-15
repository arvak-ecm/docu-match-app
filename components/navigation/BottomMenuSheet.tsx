import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from 'constants/Colors';
import { defaultStyles } from 'constants/Styles';
import { Link } from 'expo-router';
import { TabBarIcon } from './TabBarIcon';
import { BottomMenuSheetProps } from '@/types/BottomMenuSheetProps';



const BottomMenuSheet: FC<{menu:BottomMenuSheetProps[]}> = (props) => {
	const { bottom } = useSafeAreaInsets();
	return (
		<View style={[styles.container, {paddingBottom: bottom} ]}>
			{props.menu.map((item, index) => (
				<Link key={index} href={{	pathname: item.pathName }} style={[defaultStyles.btn, styles.btnLight]}
				asChild>
				<TouchableOpacity>
					<TabBarIcon name={item.icon.name} size={14} style={styles.btnIcon} />
					<Text style={styles.btnLightText}>{item.label}</Text>
				</TouchableOpacity>
				</Link>
			))}
		</View>
	)
}

export default BottomMenuSheet

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#000',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 26,
    gap: 14,
  },
  btnLight: {
    backgroundColor: '#fff',
  },
  btnLightText: {
    color: '#000',
    fontSize: 20,
  },
  btnDark: {
    backgroundColor: Colors.grey,
  },
  btnDarkText: {
    color: '#fff',
    fontSize: 20,
  },
  btnOutline: {
    borderWidth: 3,
    borderColor: Colors.grey,
  },
  btnIcon: {
    paddingRight: 6,
  },
});