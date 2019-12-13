import React, {Component} from 'react';

import styles from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Text>home</Text>
        </View>
      </View>
    );
  }
}
