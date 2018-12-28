import React from "react";
import { View, Text, Button, TouchableHighlight, Alert, ImageBackground, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import TouchID from "react-native-touch-id";
import { connect } from "react-redux";

import { loginUser } from "../../store/actions/userAction";

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
};

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
  drawerLockMode: 'locked-closed'
  }

  _pressHandler = () => {
    TouchID.authenticate(
      "to demo this react-native component",
      optionalConfigObject
    )
      .then(success => {
        this.props.store_loginUser("test", "test");
      })
      .catch(error => {
        console.log(error);
        Alert.alert("Authentication Failed");
      });
  };

  render() {
    return (
      <ImageBackground  source={require('../../assets/login_background.jpg')}  style={styles.container} >
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <Text>Login screen</Text>
          <Button
            title="Authenticate with Fingerprint"
            onPress={this._pressHandler}
          />
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate("Register")}
          />
        </View>
      </ImageBackground>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    store_loginUser: (email, password) => dispatch(loginUser(email, password))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    width: null,
    height: null,
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  }
});
