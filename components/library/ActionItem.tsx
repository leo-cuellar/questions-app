import { StyleSheet, Text, View } from "react-native";
import { Icon } from "./Icon";
import { colors } from "../../utils/tokens";

type ActionItemProps = {
  icon: string;
  label: string;
  iconSize?: number;
  iconLabelSize?: number;
  selected?: boolean;
};

export const ActionItem = ({
  icon,
  label,
  iconSize,
  iconLabelSize,
  selected = false,
}: ActionItemProps) => {
  return (
    <View style={styles.container}>
      <Icon
        name={icon}
        color={selected ? colors.white : colors.grey}
        size={iconSize}
      />
      <Text
        style={{
          ...styles.text,
          color: selected ? colors.white : colors.grey,
          fontSize: iconLabelSize ? iconLabelSize : 10,
        }}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 65,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    marginTop: 4,
  },
});
