import { Dimensions, StyleSheet, Text, View } from "react-native";
import { Icon } from "../library/Icon";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../../utils/tokens";

export const Header = ({ timer }: { timer: string }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.headerContainer, marginTop: insets.top }}>
      <View style={styles.headerAction}>
        <Icon name="timer" color={colors.grey} />
        <Text style={styles.timerText}>{timer}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle}>For You</Text>
        <View style={styles.underline} />
      </View>
      <View style={{ ...styles.headerAction, justifyContent: "flex-end" }}>
        <Icon name="search" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 32,
    position: "absolute",
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    zIndex: 2,
  },
  textContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 16,
    marginBottom: 4,
  },
  underline: {
    backgroundColor: colors.white,
    height: 4,
    width: 30,
  },
  headerAction: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  timerText: {
    color: colors.grey,
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "400",
  },
});
