import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import Amplify from 'aws-amplify'
import awsconfig from './src/aws-exports'
import Routing from './routes/Routing';

Amplify.configure(awsconfig);

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Routing />
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  }
})

export default App;
