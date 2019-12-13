import React, {Component} from 'react';

import styles from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {Button} from 'react-native-elements';

export default class LoginScreen extends Component {
  onRegisterPress = () => {
    const {navigation} = this.props;
    navigation.navigate('RegisterScreen');
  };
  render() {
    return (
      <View style={styles.loginScreenContainer}>
        <View style={styles.loginFormView}>
          <Image style={styles.images} source={require('../images/logo.png')} />
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
          <View style={styles.logindn}>
            <Button
              buttonStyle={styles.loginButton}
              onPress={() => {
                const {navigation} = this.props;
                navigation.navigate('HomeScreen');
              }}
              title="Đăng Nhập"
            />
            <TouchableOpacity style={styles.vantay}>
              <Image source={require('../images/iconvantay.png')} />
            </TouchableOpacity>
          </View>
          <Button
            buttonStyle={styles.registerButton}
            onPress={() => this.onRegisterPress()}
            title="Đăng Ký"
            color="#3897f1"
            type="clear"
          />
        </View>
      </View>
    );
  }
}
