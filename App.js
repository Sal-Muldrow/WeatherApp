//Import Stuff and Things
import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

let value; // Temperature varible
let Tem = 'sunny'; //Current Emoji
 function getTemp(Zip) { // get weather api
  return fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + Zip + ',us&APPID=56f429648ce1109b5aa3f87f8e85b47f')
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message == null) {
        //convert kelvin to f degress
        let Value = String(Math.round(((parseFloat(responseJson.main.temp) - 273.15) * 9/5) + 32));
        return Promise.resolve(Value + ' \u2109');// add degree symbol/ resolve promise
      } else {
        //console.log('invalid zip code!');
        return Promise.reject('Invalid Zip Code'); //not valid
      }
      //console.log(Zip);
    })
    .catch((error) => {
      console.log(error); //Is there something wrong? throw an error
    });
}
export default class WeatherApp extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (

      <View>
        // wrapping view
        //NOTE this should converted to be a component
        // the actual display
        <Header name={value} />
        //Text input
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40, // styling for text input

            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            bottom: 35, // move it up a bit
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2


          }}
            placeholder="Enter your ZIP code!"
            onChangeText={(text) => {
              this.setState({ text });

                getTemp(text).then(function (results){
                  //when we get the results as promised

                    value = results; // set global value equal to results
                    console.log(text);
                });
            }
          }

          />

        </View>
        // set the emoji
        <Footer emoji={Tem} />
      </View>

    );
  }
}
