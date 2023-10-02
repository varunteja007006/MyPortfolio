/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { memo } from "react";

// This will not put the children in grid.
function SectionBodyOnly({ children, customClass, title }) {
  const containerEffect = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      className={`${customClass ? customClass : "p-10"}`}
      variants={containerEffect}
      initial="hidden"
      animate="visible"
    >
      {title && (
        <h2 className="text-2xl mb-5 capitalize cursor-default">{title}</h2>
      )}
      {children}
    </motion.section>
  );
}

export default memo(SectionBodyOnly);
