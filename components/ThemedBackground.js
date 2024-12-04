// components/ThemedBackground.js
import React from "react";
import { Box, useColorModeValue } from "native-base";

export default function ThemedBackground({ children }) {
  const bgColor = useColorModeValue("white", "black");

  return (
    <Box flex={1} bg={bgColor} width="100%" height="100vh">
      {children}
    </Box>
  );
}
