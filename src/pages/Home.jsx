import Footer from "../components/footer/Footer";
import Sidenavbar from "../components/navbar/Sidenavbar";
import {
  Aboutme,
  Certifications,
  Intro,
  Projects,
  Skills,
} from "../components/sections";
import { sectionData } from "../data/sectionData";

function Home() {
  return (
    <div className="pt-14 md:pt-10">
      <Sidenavbar></Sidenavbar>
      <section id={sectionData[1]}>
        <Intro></Intro>
      </section>
      <section id={sectionData[2]}>
        <Skills></Skills>
      </section>
      <section id={sectionData[3]}>
        <Aboutme></Aboutme>
      </section>
      <section id={sectionData[4]}>
        <Projects></Projects>
      </section>
      <section id={sectionData[5]}>
        <Certifications></Certifications>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
