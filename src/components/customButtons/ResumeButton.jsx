import { motion } from "framer-motion";
import { BsDownload } from "react-icons/bs";
import resume from "../../assets/VarunK_Resume_FS.pdf";

function ResumeButton() {
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.8 }}
      className="btn accent-btn"
      href={resume}
      target="_blank"
      download
    >
      Resume
      <BsDownload className="text-xl"></BsDownload>
    </motion.a>
  );
}

export default ResumeButton;
