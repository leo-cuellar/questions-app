import { Platform, StyleSheet, Text, View } from "react-native";
import { Background } from "./Background";
import { QuestionText } from "./QuestionText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Icon } from "./Icon";
import { Playlist } from "./Playlist";
import { Description } from "./Description";
import { QuestionActions } from "./QuestionActions";
import { Options } from "./Options";

export const FeedItem = ({ data }) => {
  const insets = useSafeAreaInsets();

  return (
    <Background source={data.image}>
      <View
        style={{
          ...styles.container,
          paddingBottom:
            Platform.OS === "ios" ? insets.bottom + 52 : insets.bottom + 86,
        }}
      >
        <View style={styles.main}>
          <View style={styles.questionContainer}>
            <QuestionText text={data.question} />
            <View
              style={{
                display: "flex",
              }}
            >
              <Options id={data.id} options={data.options} />
              <Description
                userName={data.user.name}
                description={data.description}
              />
            </View>
          </View>
          <QuestionActions source={data.user.avatar} />
        </View>
        <Playlist playlist={data.playlist} />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    height: "100%",
  },
  main: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
  },
  questionContainer: {
    paddingVertical: 20,
    paddingLeft: 20,
    flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "space-between",
  },
});
