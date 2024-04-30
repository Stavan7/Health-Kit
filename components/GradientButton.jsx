import React from 'react'
import {
	Text,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

const GradientButton = ({ title, handleClick, btnStyles }) => {
	return (
		<LinearGradient
			style={[styles.btnContainer, btnStyles]}
			colors={['#1B5F75', '#0E8853']}
			start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
		>
			<TouchableOpacity activeOpacity={0.7} onPress={handleClick}>
				<Text style={styles.btnText}>{title}</Text>
			</TouchableOpacity>
		</LinearGradient>
	)
}

export default GradientButton

const styles = StyleSheet.create({
	btnContainer: {
		height: 44,
		width: '80%',
		borderRadius: 15,
		alignItems: 'center',
		justifyContent: 'center'
	},
	btnText: {
		color: '#fff',
		fontSize: 18,
		fontFamily: 'Montserrat-Bold'
	},
})