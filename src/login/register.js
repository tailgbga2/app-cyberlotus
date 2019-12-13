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

export default class RegisterScreen extends Component {
  render() {
    return (
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          {/* <Image style={styles.images} source={require('../images/logo.png')} /> */}
          <TextInput
            placeholder="Tài Khoản"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
          />
          <TextInput
            placeholder="Mật Khẩu"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
          />
          <TextInput
            placeholder="Nhập lại Mật Khẩu"
            placeholderColor="#c4c3cb"
            style={styles.loginFormTextInput}
            secureTextEntry={true}
          />
          <Button
            buttonStyle={styles.dangky}
            // onPress={() => this.onRegisterPress()}
            title="Đăng Ký"
            // color="#3897f1"
          />
        </View>
      </View>
    );
  }
}
