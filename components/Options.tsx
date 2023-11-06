import { View } from "react-native";
import { Spacer } from "./Spacer";
import { useEffect, useState } from "react";
import { OptionButton } from "./OptionButton";

export const Options = ({ id, options }) => {
  const [answer, setAnswer] = useState("");
  const [selected, setSelected] = useState("");

  const handleOptionClick = (id) => {
    if (!selected) setSelected(id);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://cross-platform.rp.devfactory.com/reveal?id=" + id
      );
      const data = await response.json();
      setAnswer(data.correct_options[0].id);
    })();
  }, []);

  if (!answer) return null;

  return (
    <View>
      {options.map((option, idx) => (
        <OptionButton
          key={option.id + idx}
          id={option.id}
          text={option.answer}
          isCorrect={option.id == answer}
          selected={selected}
          onClick={() => handleOptionClick(option.id)}
        />
      ))}
      <Spacer />
    </View>
  );
};
