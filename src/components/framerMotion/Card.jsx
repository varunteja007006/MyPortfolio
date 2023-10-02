/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { memo } from "react";

function Card({ data }) {
  const { image, Icon, name } = data;
  const itemEffect = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card card-side p-5 skills-accent-card"
      variants={itemEffect}
    >
      <figure>
        {image && <img src={image} alt="oops" />}
        {Icon && <Icon />}
      </figure>
      <div className="card-body">{name}</div>
    </motion.div>
  );
}

export default memo(Card);
