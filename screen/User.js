import { View } from "react-native";
import { fetchUserContact } from "../utility/api";
import { Avatar, Button, Text } from "react-native-paper";
import { useEffect, useLayoutEffect, useState } from "react";
import colors from "../utility/colors";

export default function User({ navigation }) {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchUserContact()
      .then((data) => {
        console.log(data);
        setUser(data);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);
  const { name, avatar, phone } = user;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: (props) => (
        <Button icon={"cog"} textColor='#000' onPress={() => navigation.navigate("Options")} />
      ),
    });
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#3498db",
      }}
    >
      <Avatar.Image
        source={{ uri: avatar }}
        size={150}
        style={{
          borderColor: "white",
          borderWidth: 3,
          height: 155,
          width: 154,
        }}
      />
      <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 20, color: "white" }}>{phone}</Text>
    </View>
  );
}
