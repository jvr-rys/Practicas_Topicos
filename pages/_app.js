// _app.js
import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";ThemedBackground
import ThemedBackground from "../components/ThemedBackground"; 
const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
});

export default function MyApp({ Component, pageProps }) {
  return (
    <NativeBaseProvider theme={theme}>
      <ThemedBackground>
        <Component {...pageProps} />
      </ThemedBackground>
    </NativeBaseProvider>
  );
}
