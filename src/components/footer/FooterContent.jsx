import { NavLink } from "react-router-dom";

function FooterContent() {
  return (
    <>
      <section className="footer-content py-5">
        <NavLink className={"underline"} to={"/"}>
          Home
        </NavLink>
        <NavLink className={"underline"} to={"/contact"}>
          Contact Me
        </NavLink>
      </section>
      <section className="footer-content py-5">
        <p>-- Made with React💙 --</p>
        <p>
          {"<"} Developer {"/>"}
        </p>
        <p className=" capitalize">-- Varun Teja K --</p>
      </section>
    </>
  );
}

export default FooterContent;
