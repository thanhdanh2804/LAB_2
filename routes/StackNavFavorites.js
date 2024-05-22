import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Contacts from "../screen/Contacts";
import Profiles from "../screen/Profiles";
import User from "../screen/User";
import Favorites from "../screen/Favorites";
import colors from "../utility/colors";

const Stack = createStackNavigator();
const StackNavFavorites = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorites}
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
        name="Profiles"
        component={Profiles}
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

export default StackNavFavorites;
