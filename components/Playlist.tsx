import { StyleSheet, Text, View } from "react-native";
import { Icon } from "./Icon";
import { colors } from "../utils/tokens";

export const Playlist = ({ playlist }) => {
  return (
    <View style={styles.container}>
      <View style={styles.playlistInfo}>
        <Icon name="playlist" size={16} />
        <Text style={styles.playlistText}>Playlist • {playlist}</Text>
      </View>
      <View style={styles.chevronContainer}>
        <Icon name="chevron-right" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#161616",
    height: 36,
    paddingHorizontal: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  playlistInfo: {
    display: "flex",
    flexDirection: "row",
  },
  playlistText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: "600",
    marginLeft: 6,
  },
  chevronContainer: {
    marginRight: -6,
  },
});
