import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import { colors } from "../utils/tokens";
import { useEffect, useRef, useState } from "react";
import { Image } from "react-native";

export const OptionButton = ({ id, text, isCorrect, selected, onClick }) => {
  const [width, setWidth] = useState(0);
  const leftPosition = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(leftPosition, {
      toValue: selected === id ? -width : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [selected, width]);

  return (
    <Pressable onPress={onClick}>
      <View
        style={styles.container}
        onLayout={(event) => setWidth(event.nativeEvent.layout.width)}
      >
        <View style={styles.textContainer}>
          <Text style={styles.optionText}>{text}</Text>
          {selected === id &&
            (isCorrect ? (
              <Image
                style={styles.thumbsup}
                source={require("../assets/gifs/thumbsup.gif")}
              />
            ) : (
              <Image
                style={styles.thumbsdown}
                source={require("../assets/gifs/thumbsdown.gif")}
              />
            ))}
        </View>
        <Animated.View
          style={[
            styles.backgroundContainer,
            {
              transform: [
                {
                  translateX: leftPosition,
                },
              ],
            },
          ]}
        >
          <View style={styles.notSelected}></View>
          <View style={isCorrect ? styles.correct : styles.incorrect}></View>
        </Animated.View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    marginBottom: 8,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    position: "relative",
  },
  textContainer: {
    padding: 12,
    height: "100%",
    width: "100%",
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  backgroundContainer: {
    width: "100%",
    height: "100%",
    position: "absolute",
    display: "flex",
    flexDirection: "row",
  },
  notSelected: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.transparentWhite,
  },
  correct: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.transparentGreen,
  },
  incorrect: {
    width: "100%",
    height: "100%",
    backgroundColor: colors.transparentRed,
  },
  optionText: {
    fontSize: 17,
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  shadowText: {
    fontSize: 17,
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 10,
    position: "absolute",
    top: 12,
    left: 12,
  },
  thumbsup: {
    position: "absolute",
    width: 40,
    height: 40,
    transform: [{ scaleX: -1 }],
    right: 0,
  },
  thumbsdown: {
    position: "absolute",
    width: 40,
    height: 40,
    transform: [{ scaleX: -1 }, { scaleY: -1 }],
    right: 0,
  },
});
