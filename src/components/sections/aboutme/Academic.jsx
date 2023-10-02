import { academics } from "../../../data";
import { motion } from "framer-motion";

function Academic() {
  const itemEffect = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
    transition: { type: "spring", stiffness: 100 },
  };

  return (
    <>
      <h3 className="text-xl capitalize mt-10 mb-5 cursor-default">Academics</h3>
      {academics.map((item) => {
        return (
          item.show && (
            <motion.div
              key={item.id}
              className="card aboutme-accent-card"
              variants={itemEffect}
            >
              <div className="card-body cursor-default">
                <h2 className="card-title">{item.course}</h2>
                <span className="flex flex-col lg:flex-row gap-2 text-gray-700">
                  <p>{item.institute}</p>
                  <span className="text-sm">
                    <p className="lg:mx-2">{item.year}</p>
                  </span>
                </span>
                <p className="text-sky-800 font-semibold">{item.score}</p>
              </div>
            </motion.div>
          )
        );
      })}
    </>
  );
}

export default Academic;
