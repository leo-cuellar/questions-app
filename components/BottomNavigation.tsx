import { Dimensions, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActionItem } from "./ActionItem";
import { colors } from "../utils/tokens";

const bottomNavigationItems = [
  {
    icon: "home",
    label: "Home",
    selected: true,
  },
  {
    icon: "compass",
    label: "Discover",
    selected: false,
  },
  {
    icon: "timer",
    label: "Activity",
    selected: false,
  },
  {
    icon: "bookmark",
    label: "Bookmarks",
    selected: false,
  },
  {
    icon: "profile",
    label: "Profile",
    selected: false,
  },
];

export const BottomNavigation = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingBottom: insets.bottom }}>
      {bottomNavigationItems.map((item) => (
        <ActionItem
          icon={item.icon}
          label={item.label}
          selected={item.selected}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 2,
    backgroundColor: colors.black,
  },
});
