import { Dimensions, ScrollView } from "react-native";
import { FeedItem } from "./FeedItem";

export const Feed = ({ onScroll, questions }) => {
  return (
    <ScrollView
      onScroll={onScroll}
      snapToInterval={Dimensions.get("window").height}
      scrollEventThrottle={16}
      decelerationRate="fast"
      snapToAlignment="start"
    >
      {questions.map((question, idx) => (
        <FeedItem key={question.id + idx} data={question} />
      ))}
    </ScrollView>
  );
};
