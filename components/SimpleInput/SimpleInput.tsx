import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  DimensionValue,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  useWindowDimensions,
} from "react-native";

interface SimpleInputProps {
  placeholder: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  showPasswordToggle?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  width?: DimensionValue;
  height?: number;
  style?: TextStyle;
  editable?: boolean;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
}

const SimpleInput: React.FC<SimpleInputProps> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  showPasswordToggle = false,
  keyboardType = "default",
  width = "100%",
  height = 53,
  style = {},
  maxLength,
  editable,
  multiline = false,
  numberOfLines = 1,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const { width: windowWidth } = useWindowDimensions();

  // Dynamic scaling based on window width
  const horizontalScale = (size: number) => (windowWidth / 375) * size;
  const verticalScale = (size: number) => (windowWidth / 375) * size;

  return (
    <View style={[styles.passwordContainer, { width }]}>
      <View style={[styles.container, { width }]}>
        <TextInput
          style={[
            styles.input,
            style,
            {
              height,
              paddingHorizontal: horizontalScale(16),
              paddingRight: showPasswordToggle
                ? horizontalScale(45)
                : horizontalScale(16),
              marginVertical: verticalScale(5),
            },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          placeholderTextColor="#999"
          maxLength={maxLength}
          editable={editable !== undefined ? editable : true}
          multiline={multiline}
          numberOfLines={numberOfLines}
          textAlignVertical={multiline ? "top" : "center"}
        />
      </View>
      {showPasswordToggle && (
        <Pressable
          style={styles.eyeButton}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#007AFF"
          />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  passwordContainer: {
    position: "relative",
    width: "100%",
  },
  container: {
    width: "100%",
  },
  input: {
    borderColor: "#E0E0E0",
    borderWidth: 1.5,
    fontSize: 16,
    fontWeight: "500",
    color: "#1a1a1a",
    borderRadius: 8,
    backgroundColor: "#FAFAFA",
  },
  eyeButton: {
    position: "absolute",
    right: 12,
    top: "50%",
    transform: [{ translateY: -11 }],
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SimpleInput;
