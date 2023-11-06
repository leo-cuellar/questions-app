import { Pressable, StyleSheet, Text, View, Animated } from "react-native";
import { colors } from "../../utils/tokens";
import { useEffect, useRef, useState } from "react";
import { Image } from "react-native";

type OptionButtonProps = {
  id: string;
  text: string;
  isCorrect: boolean;
  selected: string;
  onClick: () => void;
};

export const OptionButton = ({
  id,
  text,
  isCorrect,
  selected,
  onClick,
}: OptionButtonProps) => {
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
                source={require("../../assets/gifs/thumbsup.gif")}
              />
            ) : (
              <Image
                style={styles.thumbsdown}
                source={require("../../assets/gifs/thumbsdown.gif")}
              />
            ))}
        </View>
        <Animated.View
          style={[
            styles.background,
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
          <View
            style={{
              ...styles.background,
              backgroundColor: colors.transparentWhite,
            }}
          ></View>
          <View
            style={[
              styles.background,
              isCorrect
                ? { backgroundColor: colors.transparentGreen }
                : { backgroundColor: colors.transparentRed },
            ]}
          ></View>
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
  background: {
    width: "100%",
    height: "100%",
  },
  backgroundContainer: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
  },
  optionText: {
    backgroundColor: "transparent",
    width: "85%",
    fontSize: 17,
    color: colors.white,
    textShadowColor: colors.black,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 1,
  },
  thumbsup: {
    position: "absolute",
    width: 60,
    height: 60,
    transform: [{ scaleX: -1 }],
    right: 0,
    bottom: 0,
  },
  thumbsdown: {
    position: "absolute",
    width: 60,
    height: 60,
    transform: [{ scaleX: -1 }, { scaleY: -1 }],
    right: 0,
    top: 0,
  },
});
