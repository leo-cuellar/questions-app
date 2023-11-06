import { Dimensions, ScrollView } from "react-native";
import { FeedItem } from "./feed/FeedItem";
import { Option } from "./questions/Options";

type FeedProps = {
  onScroll: (event: any) => void;
  questions: {
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
  }[];
};

export const Feed = ({ onScroll, questions }: FeedProps) => {
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
