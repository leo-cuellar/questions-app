import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
  Entypo,
  AntDesign,
} from "@expo/vector-icons";
import { colors } from "../../utils/tokens";

type IconProps = {
  name: string;
  color?: string;
  opacity?: number;
  size?: number;
};

export const Icon = ({
  name,
  color = colors.white,
  opacity = 1,
  size = 24,
}: IconProps) => {
  const props = {
    size: size,
    color: color,
    styles: {
      opacity: opacity,
    },
  };

  switch (name) {
    case "timer":
      return <MaterialCommunityIcons name="timer" {...props} />;
    case "search":
      return <FontAwesome name="search" {...props} />;
    case "heart":
      return <Ionicons name="heart" {...props} />;
    case "comment":
      return <Ionicons name="md-chatbubble-ellipses" {...props} />;
    case "bookmark":
      return <FontAwesome name="bookmark" {...props} />;
    case "share":
      return <MaterialCommunityIcons name="share" {...props} />;
    case "chevron-right":
      return <Entypo name="chevron-right" {...props} />;
    case "playlist":
      return <Entypo name="folder-video" {...props} />;
    case "home":
      return <Entypo name="home" {...props} />;
    case "profile":
      return <FontAwesome name="user-circle" {...props} />;
    case "compass":
      return <Ionicons name="compass" {...props} />;
    case "plus":
      return <AntDesign name="pluscircle" {...props} />;
    default:
      return null;
  }
};
