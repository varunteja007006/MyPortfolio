import SectionBody from "../../../framerMotion/SectionBody";
import { technicalSkills } from "../../../../data";
import Card from "../../../framerMotion/Card";

function ProgLangSection() {
  return (
    <>
      <h4 className="text-lg capitalize mb-2 cursor-default">
        Languages/Technologies
      </h4>
      <SectionBody
        customClass={"none"}
        customSectionClass={
          "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-stretch"
        }
      >
        {technicalSkills.ProgrammingLanguages.map((item, index) => {
          const data = { name: item.name, image: item.image, Icon: item.icon };
          return item.show && <Card key={index} data={data}></Card>;
        })}
      </SectionBody>
    </>
  );
}

export default ProgLangSection;
