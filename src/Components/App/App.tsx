import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from 'react';
import { StyleSheet } from 'react-native';
import PreferencesPage from '../Preferences/PreferencesPage';
import ResultsPage from '../Results/ResultsPage';
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName={"PreferencesPage"}
      screenOptions={{
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#3740FE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="PreferencesPage" component={PreferencesPage} />
      <Stack.Screen name="ResultsPage" component={ResultsPage} />
    </Stack.Navigator>
  );
}

export const App = () => {
  // const [location, setLocation] = useState();
  // const [errorMsg, setErrorMsg] = useState('');
  //   useEffect(() => {
  //   (async () => {
  //     let { status } = await Location.requestForegroundPermissionsAsync();
  //     if (status !== 'granted') {
  //       setErrorMsg('Permission to access location was denied');
  //       return;
  //     }
  //     let location = await Location.getCurrentPositionAsync({});
  //     setLocation(location);
  //   })();
  // }, []);

  return (
    // <View style={styles.container}>
    //   <Text style={styles.paragraph}>{text}</Text>
    // </View>
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
    )
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});
