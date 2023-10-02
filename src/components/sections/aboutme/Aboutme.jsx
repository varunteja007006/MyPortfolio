import SectionBodyOnly from "../../framerMotion/SectionBodyOnly";
import Academic from "./Academic";
import Experience from "./Experience";

function Aboutme() {
  return (
    <SectionBodyOnly title={"ABOUT ME"} customClass={"p-10 section-border"}>
      <Experience></Experience>
      <Academic></Academic>
    </SectionBodyOnly>
  );
}

export default Aboutme;
