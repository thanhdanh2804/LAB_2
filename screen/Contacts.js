import React, { useState, useEffect } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { fetchContacts } from "../utility/api";
import ContactListItem from "../component/ContactListItem";
import { Text } from "react-native-paper";
// const keyExtractor = ({ phone }) => phone;
const Contacts = ({navigation}) => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    fetchContacts()
      .then((data) => {
        setContacts(data);
        setLoading(false);
        setError(false);
      })
      .catch((e) => {
        console.log(e);
        setLoading(false);
        setError(true);
      });
  }, []);
  const renderItem = ({ item }) => {
    return (
      <ContactListItem
        name={item.name}
        phone={item.phone}
        avatar={item.avatar}
        onPress={() => navigation.navigate('Profiles',{contact:item})}
      />
    );
  };
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      {loading && <ActivityIndicator size={40} color="red" />}
      {error && <Text variant="headlineLarge">Error loading ............</Text>}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};
export default Contacts;
