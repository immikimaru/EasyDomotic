import React from 'react'
import { View, Text, Button, TouchableHighlight, Alert } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import TouchID from 'react-native-touch-id'

const optionalConfigObject = {
  title: "Authentication Required", // Android
  imageColor: "#e00606", // Android
  imageErrorColor: "#ff0000", // Android
  sensorDescription: "Touch sensor", // Android
  sensorErrorDescription: "Failed", // Android
  cancelText: "Cancel", // Android
  fallbackLabel: "Show Passcode", // iOS (if empty, then label is hidden)
  unifiedErrors: false, // use unified error messages (default false)
  passcodeFallback: false // iOS
}

class LoginScreen extends React.Component {

  _pressHandler() {
    TouchID.authenticate('to demo this react-native component', optionalConfigObject)
      .then(success => {
        Alert.alert('Authenticated Successfully');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login screen</Text>
        <Button
         title="Authenticate with Fingerprint"
         onPress={this._pressHandler}
         />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Register')}
        />
      </View>
    );
  }
}

export default LoginScreen
