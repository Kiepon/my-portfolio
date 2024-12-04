import './src/components/animated'; // или import вашего компонента
import React from "react";
import { ThemeProvider } from "@emotion/react";
import { Global } from "@emotion/react";

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <Global
        styles={{
          body: {
            fontFamily: "sans-serif",
          },
        }}
      />
      {element}
    </ThemeProvider>
  );
};