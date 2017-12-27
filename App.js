import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View } from 'react-native';
import Header from './src/components/Header';
import Footer from './src/components/Footer';

let value;
let Tem = 'sunny';
 function getTemp(Zip) {
  return fetch('http://api.openweathermap.org/data/2.5/weather?zip=' + Zip + ',us&APPID=56f429648ce1109b5aa3f87f8e85b47f')
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.message == null) {
        let Value = String(Math.round(((parseFloat(responseJson.main.temp) - 273.15) * 9/5) + 32));
        return Promise.resolve(Value + ' \u2109');
      } else {
        //console.log('invalid zip code!');
        return Promise.reject('Invalid Zip Code');
      }
      //console.log(Zip);
    })
    .catch((error) => {
      console.log(error);
    });
}
export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }

  render() {
    return (
      <View>

        <Header name={value} />
        <View style={{ padding: 10 }}>
          <TextInput
            style={{ height: 40,

            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            backgroundColor: 'white',
            bottom: 35,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2


          }}
            placeholder="Enter your ZIP code!"
            onChangeText={(text) => {
              this.setState({ text });

                getTemp(text).then(function (results){

                    value = results;
                    let NumValue = parseFloat(value);
                    switch (parseFloat(value)) {
                      case NumValue > 70:
                        Tem = 'sunny';
                        break;
                      case NumValue < 32:
                        Tem = 'snowflake';
                        break;
                      default:
                        Tem = 'thermometer';
                        break;
                      }
                    console.log(text);
                });
            }
          }

          />

        </View>
        <Footer emoji={Tem} />
      </View>

    );
  }
}
