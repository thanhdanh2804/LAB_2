import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import DrawerNav from "./DrawerNav";
import BottomTabs from "./BottomTabs";

export default function App() {
  // useEffect(() => {
  //   fetchContacts().then((data) => console.log(data));
  // }, []);
  const Tab = createMaterialTopTabNavigator()
  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Drawer" component={DrawerNav}/>
          <Tab.Screen name="Bottom" component={BottomTabs}/>
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
