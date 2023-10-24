import { motion } from "framer-motion";
import profile from "../../../assets/profile.webp";
import resume from "../../../assets/VarunK_Resume_FS.pdf";
import { BsDownload } from "react-icons/bs";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <>
      <div className="hero min-h-screen pt-5 p-10 ">
        <div className="hero-content flex-col lg:flex-row lg:items-start p-0">
          {/* profile pic */}
          <div className="flex flex-col  text-white text-center items-center lg:w-1/3">
            <img
              src={profile}
              className="rounded-lg shadow-2xl  w-full h-full"
              alt="profile image"
            />
            <span className="text-xl text-black dark:text-white mt-5 w-full h-10">
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
          </div>
          <div className="lg:w-2/3">
            {/* intro content */}
            <div className="md:px-10 lg:px-14 text-justify font-normal grid justify-items-stretch cursor-default">
              <p className="pb-3 ">
                I am a passionate developer who loves to work with different
                tech stacks, both front-end and back-end. I have hands-on
                experience with various programming languages and frameworks,
                such as JavaScript, React JS, Node JS, MongoDB, HTML, CSS
                (Bootstrap & Tailwind), MERN stack, Django, Python, MySQL, PHP,
                AND tools like GIT, Tortoise SVN, SonarQube and Jenkins.
              </p>
              <p className="pb-3 ">
                Currently, I work as System Engineer for SuccessFactors HXM
                platform development, developing custom responsive interfaces
                tailored to meet client requirements. I am keen to expand my
                domain in other fields of technology. Therefore I am open to
                opportunities.
                {/* Therefore, I am open to exploring new
                opportunities and collaborating with individuals and
                organizations on exciting projects.  */}
              </p>
              <p className="pb-3 ">
                I love developing web apps and python scripting for automation &
                day-to-day tasks that can be made easy with python. I am always
                eager to explore new technologies and I keep myself relevant
                technologies.
                {/* I am particularly interested in cutting-edge
                technologies such as cloud computing, web3, blockchain, and
                smart contracts. */}
              </p>
              {/* <p className="pb-3 ">
                Thank you for visiting my portfolio website, and I hope you
                enjoy browsing through my projects. Please feel free to contact
                me if you have any questions or would like to discuss any
                potential opportunities .
              </p> */}
              <div className="justify-self-end">
                <p className="pb-3 font-normal italic">- Varun Teja . K</p>
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
