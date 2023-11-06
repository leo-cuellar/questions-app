import { Text, View } from "react-native";
import { colors } from "../../utils/tokens";

type DescriptionProps = {
  userName: string;
  description: string;
};

export const Description = ({ userName, description }: DescriptionProps) => {
  return (
    <View>
      <View style={{}}>
        <Text
          style={{
            color: colors.white,
            fontSize: 15,
            fontWeight: "600",
            marginBottom: 8,
          }}
        >
          {userName}
        </Text>
      </View>
      <View>
        <Text
          style={{
            color: colors.white,
            fontSize: 13,
            fontWeight: "400",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};
