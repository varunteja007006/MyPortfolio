import ProgLangSection from "./technicalSkills/ProgLangSection";
import FrameworkCard from "./technicalSkills/FrameworkCard";
import OSCard from "./technicalSkills/OSCard";
import ToolsCard from "./technicalSkills/ToolsCard";
import PlatformCard from "./technicalSkills/PlatformCard";

function TechnicalSkills() {
  return (
    <>
      <h3 className="text-xl capitalize mt-10 mb-5 cursor-default">Technical Skills</h3>
      <ProgLangSection></ProgLangSection>
      <FrameworkCard></FrameworkCard>
      <PlatformCard></PlatformCard>
      <ToolsCard></ToolsCard>
      <OSCard></OSCard>
    </>
  );
}

export default TechnicalSkills;
