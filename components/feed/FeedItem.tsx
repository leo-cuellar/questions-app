import { Platform, StyleSheet, Text, View } from "react-native";
import { Background } from "./Background";
import { QuestionText } from "../questions/QuestionText";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Playlist } from "./Playlist";
import { Description } from "../questions/Description";
import { Actions } from "./Actions";
import { Option, Options } from "../questions/Options";

export type FeedItemProps = {
  data: {
    image: string;
    question: string;
    id: string;
    options: Option[];
    user: {
      name: string;
      avatar: string;
    };
    description: string;
    playlist: string;
  };
};

export const FeedItem = ({ data }: FeedItemProps) => {
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
          <Actions source={data.user.avatar} />
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
