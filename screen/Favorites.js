import { useEffect, useState } from "react";
import { FlatList, Touchable, View } from "react-native";
import { fetchContacts } from "../utility/api";
import { ActivityIndicator, Avatar, Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Favorites({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((data) => {
        setContacts(data);
        setLoading(false);
        setError(error);
      })
      .catch((e) => {
        setLoading(false);
        setError(error);
        console.log(e);
      });
  }, []);
  const renderItem = ({ item }) => {
    const { avatar } = item;
    return (
      <TouchableOpacity
        style={{ padding: 20 }}
        onPress={() => navigation.navigate("Profiles", { contact: item })}
      >
        <Avatar.Image source={{ uri: avatar }} size={80} />
      </TouchableOpacity>
    );
  };
  return (
    <View>
      {loading && <ActivityIndicator size={40} color="blue" />}
      {error && <Text>Error loading ..................</Text>}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={3}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
}
