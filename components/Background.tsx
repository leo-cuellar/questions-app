import { Dimensions, ImageBackground, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors } from "../utils/tokens";

export const Background = ({ source, children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: source }}
        resizeMode="cover"
        style={styles.imageBackground}
      >
        <View style={styles.overlay}>
          <View
            style={{
              paddingTop: insets.top + 100,
              paddingBottom: insets.bottom,
            }}
          >
            {children}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height,
  },
  imageBackground: { flex: 1 },
  overlay: {
    backgroundColor: colors.transparentDark,
    height: "100%",
  },
});
