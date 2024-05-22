import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Contacts from "../screen/Contacts";
import Profiles from "../screen/Profiles";
import User from "../screen/User";
import Favorites from "../screen/Favorites";
import Options from "../screen/Options";

const Stack = createStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Profiles" component={Profiles} />
      <Stack.Screen name="Favorites" component={Favorites} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="Options" component={Options} />
    </Stack.Navigator>
  );
};

export default StackNav;
