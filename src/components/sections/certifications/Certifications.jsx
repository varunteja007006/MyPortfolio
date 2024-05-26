import { certifications } from "../../../data";
import SectionBody from "../../framerMotion/SectionBody";
import { motion } from "framer-motion";

function Certifications() {
  const itemEffect = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <SectionBody title={"CERTIFICATIONS"} customClass={"p-10 section-border"}>
      {certifications.map((item) => {
        return (
          item.show && (
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="grid grid-rows-1 p-5 certificate-accent-card"
              key={item.id}
              variants={itemEffect}
            >
              {item.certificate_name}
              <span className="text-sm font-normal text-gray-600">
                - {item.certificate_provider}
              </span>
            </motion.div>
          )
        );
      })}
    </SectionBody>
  );
}

export default Certifications;
