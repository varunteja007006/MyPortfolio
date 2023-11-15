import { motion } from "framer-motion";
import profile from "../../../assets/profile.webp";
import resume from "../../../assets/VarunK_Resume_FS.pdf";
import { BsDownload } from "react-icons/bs";
import Typewriter from "typewriter-effect";

function Intro() {
  return (
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
              Currently, I work as System Engineer for HCM platform development,
              developing react based custom responsive interfaces tailored to
              meet client requirements. I have successfully developed dynamic
              dashboards and data panels. I am keen to expand my domain in other
              fields of technology.{" "}
              <em className="font-bold">
                {" "}
                Therefore I am open to opportunities.
              </em>
            </p>
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
  );
}

export default Intro;
