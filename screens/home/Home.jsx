import React from 'react'
import {
	Text,
	StyleSheet,
	SafeAreaView,
} from 'react-native'

const Home = () => {
	return (
		<SafeAreaView style={styles.root}>
			<Text style={styles.text}>Home</Text>
		</SafeAreaView>
	)
}

export default Home

const styles = StyleSheet.create({
	root: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF'
	},
	text: {
		fontSize: 16,
		color: '#000',
		fontFamily: 'Montserrat-Bold'
	}
})
