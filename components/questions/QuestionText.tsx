import { Dimensions, StyleSheet, Text, View } from "react-native";
import { colors } from "../../utils/tokens";
import { createLines } from "../../utils/textProcessing";

const fontSize = 22;

type QuestionTextProps = {
  text: string;
};

export const QuestionText = ({ text }: QuestionTextProps) => {
  const containerWidth = Dimensions.get("window").width - 160;
  const averageCharWidth = fontSize * 0.5;
  const maxChars = Math.floor(containerWidth / averageCharWidth);

  const words = text.split(" ");

  const lines = createLines(words, maxChars, averageCharWidth);

  return (
    <View style={styles.container}>
      {lines.map((item, idx) => (
        <View key={idx} style={[styles.lineContainer, item.borderRadiusStyle]}>
          <Text style={styles.text}>{item.line}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
  },
  lineContainer: {
    backgroundColor: colors.transparentText,
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  text: {
    fontSize,
    fontWeight: "700",
    color: colors.white,
  },
});
