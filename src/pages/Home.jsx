import { Suspense, lazy } from "react";
import Sidenavbar from "../components/navbar/Sidenavbar";
import { Intro } from "../components/sections";
import { sectionData } from "../data/sectionData";
import CustomLoading from "../components/custom/CustomLoading";

const Footer = lazy(() => import("../components/footer/Footer"));
const Projects = lazy(() => import("../components/sections/projects/Projects"));
const Skills = lazy(() => import("../components/sections/skills/Skills"));
const Aboutme = lazy(() => import("../components/sections/aboutme/Aboutme"));
const Certifications = lazy(() =>
  import("../components/sections/certifications/Certifications")
);

function Home() {
  return (
    <div className="pt-14 md:pt-10">
      <Sidenavbar></Sidenavbar>
      <section id={sectionData[1]}>
        <Intro></Intro>
      </section>
      <section id={sectionData[2]}>
        <Suspense fallback={<CustomLoading></CustomLoading>}>
          <Skills></Skills>
        </Suspense>
      </section>
      <section id={sectionData[3]}>
        <Suspense fallback={<CustomLoading></CustomLoading>}>
          <Aboutme></Aboutme>
        </Suspense>
      </section>
      <section id={sectionData[4]}>
        <Suspense fallback={<CustomLoading></CustomLoading>}>
          <Projects></Projects>
        </Suspense>
      </section>
      <section id={sectionData[5]}>
        <Suspense fallback={<CustomLoading></CustomLoading>}>
          <Certifications></Certifications>
        </Suspense>
      </section>
      <Suspense fallback={<CustomLoading></CustomLoading>}>
        <Footer></Footer>
      </Suspense>
    </div>
  );
}

export default Home;
