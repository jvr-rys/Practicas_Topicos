// pages/index.js
import React from "react";
import { Center, Text } from "native-base";
import ToggleThemeButton from "../components/ToggleThemeButton";

export default function Home() {
  return (
    <Center flex={1}>
      <Text>¡Hola, mundo!</Text>
      <ToggleThemeButton />
    </Center>
  );
}
