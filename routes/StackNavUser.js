import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Contacts from "../screen/Contacts";
import Profiles from "../screen/Profiles";
import User from "../screen/User";
import Favorites from "../screen/Favorites";
import Options from "../screen/Options";
import colors from "../utility/colors";

const Stack = createStackNavigator();
const StackNavUser = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "orange",
            borderBottomWidth: 1,
            borderColor: colors.black,
          },
        }}
      />
      <Stack.Screen
        name="Options"
        component={Options}
        options={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "orange",
            borderBottomWidth: 1,
            borderColor: colors.black,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavUser;
