import { StyleSheet, Text, View } from "react-native";
import { ActionItem } from "./ActionItem";
import { Profile } from "./Profile";
import { colors } from "../utils/tokens";
import { Spacer } from "./Spacer";

const items = [
  {
    icon: "heart",
    value: "87",
    iconSize: 36,
  },
  {
    icon: "comment",
    value: "2",
    iconSize: 30,
  },
  {
    icon: "bookmark",
    value: "203",
    iconSize: 30,
  },
  {
    icon: "share",
    value: "17",
    iconSize: 36,
  },
];

export const QuestionActions = ({ source }) => {
  return (
    <View style={styles.container}>
      <Profile source={source} />
      <Spacer />
      <Spacer />

      {items.map((item) => (
        <>
          <Spacer />
          <ActionItem
            icon={item.icon}
            iconSize={item.iconSize}
            label={item.value}
            iconLabelSize={12}
            selected
          />
        </>
      ))}
      <Spacer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
