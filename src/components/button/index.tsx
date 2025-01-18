import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from "react-native";

import { IconProps as TablerIconProps} from "@tabler/icons-react-native"

import { s } from "./styles";
import { colors } from "@/styles/theme";

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean;
};

function Button({ children, style, isLoading = false, ...rest }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[s.container, style]}
      activeOpacity={0.2}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={colors.gray[100]} />
      ) : (
        children
      )}
    </TouchableOpacity>
  );
}

function Tittle({ children }: TextProps) {
  return <Text style={s.title}>{children}</Text>;
}

type IconProps = TablerIconProps & {
  icon: React.ComponentType<TablerIconProps>;
};

function Icon({ icon: Icon }: IconProps) {
  return <Icon size={24} color={colors.gray[100]} />;
}

Button.Title = Tittle;
Button.Icon = Icon;

export { Button };
