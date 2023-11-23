/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { memo } from "react";

function CustomLinkButton({ customClass, label, url, handleClick, ariaLabel }) {
  return (
    <motion.a
      whileTap={{ scale: 0.7 }}
      whileFocus={{ scale: 1.1 }}
      className={`btn ${customClass}`}
      href={url}
      onClick={handleClick}
      aria-label={ariaLabel ? ariaLabel : "btn"}
    >
      {label}
    </motion.a>
  );
}

export default memo(CustomLinkButton);
