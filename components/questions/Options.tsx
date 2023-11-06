import { View } from "react-native";
import { Spacer } from "../library/Spacer";
import { useEffect, useState } from "react";
import { OptionButton } from "./OptionButton";
import { useAnswer } from "../../hooks/useAnswer";

export type Option = {
  id: string;
  answer: string;
};

type OptionsProps = {
  id: string;
  options: Option[];
};

export const Options = ({ id, options }: OptionsProps) => {
  const [selected, setSelected] = useState("");
  const handleOptionClick = (id: string) => {
    if (!selected) setSelected(id);
  };

  const { answer } = useAnswer(id);
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
