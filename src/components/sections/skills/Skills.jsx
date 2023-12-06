import SectionBodyOnly from "../../framerMotion/SectionBodyOnly";
import IndustrySkills from "./IndustrySkills";
import TechnicalSkills from "./TechnicalSkills";

function Skills() {
  return (
    <SectionBodyOnly title={"SKILLS"} customClass={"p-10 section-border"}>
      <TechnicalSkills></TechnicalSkills>
      <IndustrySkills></IndustrySkills>
    </SectionBodyOnly>
  );
}

export default Skills;
