import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/login/login';
import RegisterScreen from './src/login/register';
import HomeScreen from './src/login/home';

const AppStack = createStackNavigator({
  LoginScreen: {
    screen: LoginScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffa500',
      },
      headerTitle: 'CyberLotus - Đăng Nhập',
      headerTintColor: '#ffffff',
    },
  },
  RegisterScreen: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffa500',
      },
      headerTitle: 'CyberLotus - Đăng Ký',
      headerTintColor: '#ffffff',
    },
  },
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#ffa500',
      },
      headerTitle: 'CyberLotus - Trang Chủ',
      headerTintColor: '#ffffff',
    },
  },
});
const App = createAppContainer(AppStack);
AppRegistry.registerComponent(appName, () => App);
