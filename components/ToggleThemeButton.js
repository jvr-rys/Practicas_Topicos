// ToggleThemeButton.js
import { Button, useColorMode } from "native-base";
import React from "react";

export default function ToggleThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onPress={toggleColorMode}>
      Cambiar a {colorMode === "light" ? "oscuro" : "claro"}
    </Button>
  );
}
