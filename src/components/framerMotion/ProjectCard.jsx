/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { memo } from "react";
import { Link } from "react-router-dom";

function ProjectCard({ data }) {
  const { title, subtitle, badges, description, github, link, images } = data;
  const itemEffect = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div
      // whileHover={{ scale: 1.01 }}
      className="card card-side p-5 projects-accent-card mb-1 grid grid-cols-1 lg:grid-cols-2 items-center"
      variants={itemEffect}
    >
      <figure className="flex flex-col h-72 overflow-y-auto overflow-x-auto">
        {images &&
          images.map((item, index) => {
            return <img key={index} src={item} alt={title} />;
          })}
      </figure>

      <div className="card-body block text-center">
        <h3 className="text-2xl font-semibold cursor-default">{title ? title : "......"}</h3>
        <p className="text-sm text-gray-700 cursor-default">{subtitle ? subtitle : "....."}</p>
        <div className="mb-3">
          {badges &&
            badges.map((item, index) => {
              return (
                <p
                  key={index}
                  className="badge mr-2 mt-1py-3 text-sm projects-accent-badge w-fit"
                >
                  {item}
                </p>
              );
            })}
        </div>
        <p className="text-gray-700 text-justify cursor-default">
          {description ? description : "......"}
        </p>
        <div className="card-actions my-2">
          {github && (
            <Link to={github} className="btn accent-btn">
              Git
            </Link>
          )}
          {link && (
            <Link to={link} className="btn accent-btn">
              Demo
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default memo(ProjectCard);
