import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { BottomNavigation, Feed, Header } from "./components";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function App() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [timerText, setTimerText] = useState("0s");

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((timer) => {
        const newTimer = timer + 1;
        const minutes = Math.floor(newTimer / 60);
        const seconds = newTimer % 60;
        setTimerText(`${minutes > 0 ? `${minutes}m ` : ""}${seconds}s`);
        return newTimer;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchQuestion = async () => {
    setLoading(true);
    const response = await fetch(
      "https://cross-platform.rp.devfactory.com/for_you"
    );
    const data = await response.json();
    setQuestions((prev) => [...prev, data]);
    setLoading(false);
  };
  const debouncedFetchQuestion = debounce(fetchQuestion, 100);

  const isCloseToBottom = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  useEffect(() => {
    fetchQuestion();
    fetchQuestion();
  }, []);

  const handleScroll = (event) => {
    if (!loading && isCloseToBottom) {
      debouncedFetchQuestion();
    }
  };

  return (
    <SafeAreaProvider>
      <Header timer={timerText} />
      <Feed questions={questions} onScroll={handleScroll} />
      <BottomNavigation />
    </SafeAreaProvider>
  );
}
