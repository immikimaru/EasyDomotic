import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { connect } from 'react-redux'

import { logoutUser } from '../../store/actions/userAction'

class DashboardScreen extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
  }

  _pressHandler = () => {
    this.props.store_logoutUser()
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard screen</Text>
        <Button
         title="Logout user"
         onPress={this._pressHandler}
         />
      </View>
    );
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    store_logoutUser: () => dispatch(logoutUser())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(DashboardScreen);
