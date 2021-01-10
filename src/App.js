import React from "react";

import { ThemeProvider } from "styled-components";

import { GlobalStyle } from "./styles/GlobalStyle";
import { defaultTheme } from "./styles/theme";

import Main from "./pages/Main";
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
