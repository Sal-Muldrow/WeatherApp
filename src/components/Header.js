import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

//header component
class Header extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.bigblue}>{this.props.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 120,
  },
  viewStyle: {
  backgroundColor: '#4464FB',
  justifyContent: 'center',
  alignItems: 'center',

  height: 300,
  paddingTop: 15,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2
  },
});


export default Header;
// skip this line if using Create React Native App
//wow
