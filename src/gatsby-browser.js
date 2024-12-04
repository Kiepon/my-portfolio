import React from "react";
import { motion } from "framer-motion";

export const wrapRootElement = ({ element }) => (
  <motion.div initial="hidden" animate="visible" exit="hidden">
    {element}
  </motion.div>
);