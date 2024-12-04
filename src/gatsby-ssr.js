import React from "react";
import { motion } from "framer-motion"; // Импортируйте motion
import {ThemeProvider} from '@emotion/react'
import {Global} from '@emotion/react'

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider>
      <Global styles={{ body: { fontFamily: "sans-serif" } }} />
      <motion.div style={{width: '100vw', height: '100vh'}}> {/* Обёртывающий компонент */}
      {element}
      </motion.div>
    </ThemeProvider>
  );
};