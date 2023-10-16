import { motion } from "framer-motion";
import profile from "../../../assets/profile.webp";
import resume from "../../../assets/varun_resume.pdf";
import { BsDownload } from "react-icons/bs";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row lg:items-start">
          {/* profile pic */}
          <span className="flex flex-col gap-5 text-white text-center">
            <img src={profile} className="max-w-sm rounded-lg shadow-2xl" />
            <span className="text-xl text-black dark:text-white">
              <Typewriter
                options={{
                  strings: ["Full Stack Developer", "Python Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </span>
          <div>
            {/* intro content */}
            <div className="md:px-10 lg:px-14 text-justify font-normal grid justify-items-stretch cursor-default">
              <p className="pb-3 ">
                I am a passionate developer who loves to work with different
                tech stacks, both front-end and back-end. I have hands-on
                experience with various languages and frameworks, such as
                Django, Python, HTML, CSS (Bootstrap & Tailwind), JavaScript,
                React JS, Node JS, Mongo DB, MySQL, PHP, and also tools like
                GIT, Tortoise SVN, and Jenkins.
              </p>
              <p className="pb-3 ">
                My primary focus is on developing web apps, apps, and Python
                scripting for automation, but I am always eager to explore new
                technologies.
                {/* I am particularly interested in cutting-edge
                technologies such as cloud computing, web3, blockchain, and
                smart contracts. */}
              </p>
              <p className="pb-3 ">
                Currently, I work as System Engineer for SuccessFactors HXM
                platform development, but I am keen to expand my domain in other
                fields of technology. Therefore I am open to opportunities.
                {/* Therefore, I am open to exploring new
                opportunities and collaborating with individuals and
                organizations on exciting projects.  */}
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
