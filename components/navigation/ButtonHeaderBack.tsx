import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router';
import { TabBarIcon } from './TabBarIcon';

const ButtonHeaderBack = () => {
	const navigation = useNavigation();
	return (
		<View>
			<TouchableOpacity style={styles.container} onPress={() => navigation.goBack()}>
        <TabBarIcon name="chevron-back" style={styles.icon} />
        <Text style={styles.label}>Atrás</Text>
      </TouchableOpacity>
		</View>
	)
}

export default ButtonHeaderBack

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	label: {
		fontSize: 18,
	},
	icon: {
		fontSize: 18,

	}
})