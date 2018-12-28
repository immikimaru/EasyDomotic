import React from 'react'
import { View, Text, Button, Alert } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions, StackActions, DrawerActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';

import { logoutUser } from '../../store/actions/userAction'

class DashboardScreen extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    console.log(this.props)
  }

  _pressHandler = () => {
    this.props.store_logoutUser()
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: "Login" })],
      key: null
    });
    this.props.navigation.dispatch(resetAction);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Dashboard screen</Text>
        <Button
         title="Logout user"
         onPress={this._pressHandler}
         />
        <Button
          title="Open drawer"
          onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}
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
