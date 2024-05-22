import React from "react";
import { View, StyleSheet } from "react-native";
import { Icon, Text } from "react-native-paper";
import colors from "../utility/colors";
import PropTypes from "prop-types";

const DetailsListItem = ({ icon, title, subtitle }) => {
  return (
    <View style={styles.borderContainer}>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          {icon && (
            <Icon
              source={icon}
              size={24}
              color="black"
              style={{ marginRight: 20 }}
            />
          )}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
          </View>
        </View>
      </View>
    </View>
  );
};

DetailsListItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default DetailsListItem;
const styles = StyleSheet.create({
  borderContainer: {
    paddingLeft: 24,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  wrapper: {
    flexDirection: "row",
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 24,
    borderBottomColor: colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  contentContainer: {
    justifyContent: "center",
    flex: 1,
  },
  title: {
    color: colors.black,
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 20,
  },
  subtitle: {
    color: colors.blue,
    fontSize: 15,
    marginTop: 4,
    marginLeft: 20,
  },
});
