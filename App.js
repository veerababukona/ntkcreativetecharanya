import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
       <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Login')}
        />
    </View>
  );
}

const LoginScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login Screen</Text>
      <Button
        title="Go to Home Screen"
        onPress={() => navigation.navigate('Home')}
      />
       <Button
              title="Go to Register Screen"
              onPress={() => navigation.navigate('Register')}
            />
    </View>
  );
}

const RegisterScreen = ({navigation}) => {
    return (
        <View>
            <Text>Register Screen</Text>
            <Button
                title="Go to Home Sceen"
                onPress={() => navigation.navigate('Home')}
            />

        </View>
    );
}


const DetailsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const HomeStack = createStackNavigator();

const LoginStack = createStackNavigator();

const Drawer = createDrawerNavigator();


const HomeStackScreen = ({navigation }) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
      }}>
        <HomeStack.Screen name="Home" component={HomeScreen}
        options = {{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor='#009387'
            onPress={ () => navigation.openDrawer()}>
            </Icon.Button>
        )
        }}/>
      </HomeStack.Navigator>
)

const LoginStackScreen = ({navigation }) => (
    <LoginStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
      }}>
        <LoginStack.Screen  name="Login" component={LoginScreen} options={{
         title:'Login',
         headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387"
            onPress= {() => navigation.openDrawer()}>
            </Icon.Button>
         )
        }} />
      </LoginStack.Navigator>
)


const App = () => {
  return (
    <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Login" component={LoginStackScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;