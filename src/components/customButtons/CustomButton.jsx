/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { memo } from "react";

function CustomButton({ customClass, label, type }) {
  return (
    <>
      <motion.button
        type={type}
        whileTap={{ scale: 0.7 }}
        whileFocus={{ scale: 1.1 }}
        className={customClass}
      >
        {label}
      </motion.button>
    </>
  );
}

export default memo(CustomButton);
