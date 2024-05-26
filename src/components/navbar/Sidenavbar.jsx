import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import CustomLinkButton from "../customButtons/CustomLinkButton";
import { sectionData } from "../../data/sectionData";
import { useState } from "react";

function Sidenavbar() {
  const [sectionID, setSectionID] = useState(1);

  const decrement = () => {
    if (sectionID === 5) {
      setSectionID(1);
      return;
    }
    setSectionID(sectionID + 1);
  };

  const increment = () => {
    if (sectionID === 0) {
      setSectionID(4);
      return;
    }
    setSectionID(sectionID - 1);
  };

  const next = () => {
    if (sectionID === 5) {
      setSectionID(1);
      return;
    }
    setSectionID(sectionID + 1);
  };

  return (
    <>
      {/* side nav on big screen */}
      <div className="fixed z-10 flex-col hidden gap-20 lg:flex bottom-1/3 right-2">
        <CustomLinkButton
          label={<SlArrowUp></SlArrowUp>}
          customClass={"btn sidebar-btn-lg"}
          handleClick={increment}
          url={`#${sectionData[sectionID === 0 ? 5 : sectionID]}`}
          ariaLabel="scroll through sections"
        ></CustomLinkButton>
        <CustomLinkButton
          label={<SlArrowDown></SlArrowDown>}
          customClass={"btn sidebar-btn-lg"}
          handleClick={decrement}
          url={`#${sectionData[sectionID === 6 ? 1 : sectionID]}`}
          ariaLabel="scroll through sections"
        ></CustomLinkButton>
      </div>
      {/* side nav on small screen */}
      <div className="fixed z-10 lg:hidden bottom-32 right-2 ">
        <CustomLinkButton
          label={<SlArrowDown></SlArrowDown>}
          customClass={"btn sidebar-btn-sm"}
          handleClick={next}
          url={`#${sectionData[sectionID]}`}
          ariaLabel="scroll through sections"
        ></CustomLinkButton>
      </div>
    </>
  );
}

export default Sidenavbar;
