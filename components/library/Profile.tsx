import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";
import { Icon } from "./Icon";
import { colors } from "../../utils/tokens";

export const Profile = ({ source }: { source: string }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image style={styles.image} source={source} />
      <View style={styles.icon}>
        <Icon name="plus" color={colors.green} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 45,
    width: 45,
    borderColor: colors.white,
    borderWidth: 1,
    borderRadius: 60,
  },
  icon: {
    position: "absolute",
    borderRadius: 60,
    backgroundColor: colors.white,
    bottom: -10,
  },
});
