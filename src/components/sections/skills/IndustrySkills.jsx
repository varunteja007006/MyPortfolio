import { industrySkills } from "../../../data/";
import Card from "../../framerMotion/Card";
import SectionBody from "../../framerMotion/SectionBody";

function IndustrySkills() {
  return (
    <>
      <h3 className="text-xl capitalize mt-10 mb-5 cursor-default">
        Industry Skills
      </h3>
      <SectionBody
        customClass={"none"}
        customSectionClass={
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-stretch"
        }
      >
        {industrySkills.map((item, index) => {
          const data = { name: item.name, image: item.image, Icon: item.icon };
          return (
            item.show && <Card key={item.id} data={data} index={index}></Card>
          );
        })}
      </SectionBody>
    </>
  );
}

export default IndustrySkills;
