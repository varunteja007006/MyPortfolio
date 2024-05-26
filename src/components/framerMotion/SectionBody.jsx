/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { memo } from "react";

// This will put the children in grid.
function SectionBody({ children, customClass, customSectionClass, title }) {
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
    <motion.div
      className={`${customClass ? `${customClass}` : "p-10"}`}
      variants={containerEffect}
      initial="hidden"
      animate="visible"
    >
      {title && (
        <h2 className="mb-5 text-2xl capitalize cursor-default">{title}</h2>
      )}

      {/* section body starts here */}
      <section
        className={`${
          customSectionClass ||
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-stretch"
        }`}
      >
        {children}
      </section>
    </motion.div>
  );
}

export default memo(SectionBody);
