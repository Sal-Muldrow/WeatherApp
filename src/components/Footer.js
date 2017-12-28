import React, { Component } from 'react';
import Emoji from 'react-native-emoji';
import { StyleSheet, Text, View } from 'react-native';

//header component
class Footer extends Component {
  render() {
    return (
      <View style={styles.viewStyle}>
      //set emoji
        <Text style={{ fontSize: 120 }}><Emoji name={this.props.emoji} /></Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  viewStyle: {

  justifyContent: 'center',
  alignItems: 'center',

  height: 300,
  paddingTop: 15,

  },
});


export default Footer;

//wow
