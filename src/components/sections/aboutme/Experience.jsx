import { experience } from "../../../data";
import { motion } from "framer-motion";

function Experience() {
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
      <h3 className="text-xl capitalize mb-5 cursor-default">Experience</h3>
      {experience.map((item) => {
        return (
          item.show && (
            <motion.div
              key={item.id}
              className="card aboutme-accent-card"
              variants={itemEffect}
            >
              <div className="card-body cursor-default">
                <h2 className="card-title">{item.jobTitle}</h2>
                <span className="flex flex-col lg:flex-row items-start gap-2 text-gray-700">
                  <p>{item.company}</p>
                  <span className="flex flex-row text-sm">
                    <p className="lg:mx-2">{item.workingFrom}</p>
                    <p className="mx-2">-</p>
                    <p className="lg:mx-2">{item.workingTill}</p>
                  </span>
                </span>
                {item.jobDescription.length > 1 ? (
                  <ul className="text-justify">
                    {item.jobDescription.map((line, index) => {
                      return (
                        <li key={index} className="py-2">
                          {line}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-justify">{item.jobDescription}</p>
                )}
              </div>
            </motion.div>
          )
        );
      })}
    </>
  );
}

export default Experience;
