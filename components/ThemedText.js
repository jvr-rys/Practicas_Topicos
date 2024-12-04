// ./components/ThemedText.js
import { Text, useColorModeValue } from "native-base";
import React from "react";

export default function ThemedText() {
  const textColor = useColorModeValue("black", "white");

  return <Text color={textColor}>¡Este texto cambia de color!</Text>;
}
