import { motion } from "framer-motion";
import profile from "../../../assets/profile.webp";
import resume from "../../../assets/Resume_VarunK.pdf";
import { BsDownload } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const childIntroVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 1,
    },
  },
};

const introVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 1,
      staggerChildren: 1,
    },
  },
};

function Intro() {
  return (
    <div className="hero min-h-fit lg:min-h-screen md:pt-5 md:mt-10 md:p-10 lg:mt-5 p-7">
      <motion.div
        variants={introVariant}
        initial="hidden"
        animate="visible"
        className="flex-col p-0 hero-content md:flex-row md:items-start"
      >
        {/* profile pic */}
        <motion.div
          variants={childIntroVariant}
          className="flex flex-col items-center text-center text-white md:w-1/3"
        >
          <img
            src={profile}
            className="rounded-lg shadow-2xl w-80 h-80 lg:w-96 lg:h-96"
            alt="profile"
          />
          <span className="w-full mt-5 text-xl text-black dark:text-white h-fit">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Developer | React JS | Node JS | JavaScript",
                  "Python Developer | Python | Django",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </motion.div>
        <motion.div variants={childIntroVariant} className="md:w-2/3">
          {/* intro content */}
          <div className="grid font-normal text-justify cursor-default md:px-10 lg:px-14 justify-items-stretch">
            <p className="pb-3 font-medium">
              I am a passionate developer who loves to work with different tech
              stacks, on both front-end and back-end. I have hands-on experience
              with various programming languages and frameworks. My core skills
              are{" "}
              <em className="font-bold">
                JavaScript, React JS, Node JS, MongoDB, HTML, CSS.{" "}
              </em>{" "}
              Also familiar with{" "}
              <em className="font-bold">
                {" "}
                Bootstrap CSS, Tailwind CSS, Django, Python, MySQL, PHP.
              </em>{" "}
              I use variety of other tools that can maximize productivity and
              optimize product delivery, for example{" "}
              <em className="font-bold">
                {" "}
                GIT, VS Code,Postman, Tortoise SVN, SonarQube and Jenkins.
              </em>
              <br />
              <br />I love developing web apps and python scripting for
              automation of day-to-day tasks. I am always eager to explore new
              technologies and I keep myself relevant. <br />
              <br />
              Currently, I work as Software Engineer at{" "}
              <a href="https://invest4edu.com/">InvestEdu</a>. Expertise in
              building Web Apps using Next JS, React, Node, SQL.{" "}
              <em className="font-bold">
                {" "}
                Always curious to explore & work with new technologies.
                Therefore I am open to opportunities.
              </em>
            </p>
            <div className="justify-self-end">
              <p className="pb-3 italic font-normal">- Varun Teja . K</p>
            </div>

            {/* download resume button */}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.8 }}
              className="btn accent-btn"
              href={resume}
              target="_blank"
              download
            >
              Download my Resume
              <BsDownload className="text-xl"></BsDownload>
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Intro;
