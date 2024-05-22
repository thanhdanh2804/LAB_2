import React, { useEffect, useState } from "react";
import { fetchRandomContact } from "../utility/api";
import { View, StyleSheet, Text } from "react-native";
import ContactThumbnail from "../component/ContactThumbnail";
import colors from "../utility/colors";
import DetailsListItem from "../component/DetailsListItem";

const Profiles = ({route}) => {
  const { avatar, name, email, phone, cell } = route.params.contact;
  return (
    <View style={styles.container}>
      <View style={styles.avatarSection}>
        <ContactThumbnail avatar={avatar} name={name} phone={phone} />
      </View>
      <View style={styles.detailsSection}>
        <DetailsListItem icon="email" title="Email" subtitle={email} />
        <DetailsListItem icon="phone" title="Phone" subtitle={phone} />
        <DetailsListItem icon="cellphone" title="Personal" subtitle={cell} />
      </View>
    </View>
  );
};

export default Profiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarSection: {
    backgroundColor: colors.blue,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  detailsSection: {
    flex: 1,
    backgroundColor: "white",
  },
});
