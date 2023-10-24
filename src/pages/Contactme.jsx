import { Link } from "react-router-dom";
import { contacts } from "../data";
import FooterContent from "../components/footer/FooterContent";

function Contactme() {
  return (
    <>
      <div className="p-10 pt-20">
        <h1 className="text-4xl mb-5">Contact Me</h1>
        {contacts.map((item) => {
          return (
            <>
              {/* large screen */}
              <div key={item.id} className="hidden lg:contact-container-lg">
                <p className="cursor-default capitalize">
                  {item.contact_type}:{" "}
                </p>
                <p>{item.contact_value}</p>
                <Link
                  to={item.contact_href}
                  className={`contact-btn-lg ${item.icon_style}`}
                  aria-label={item.contact_href}
                >
                  {<item.contact_icon />}
                </Link>
              </div>
              {/* Small screen */}
              <div key={item.id} className="lg:hidden contact-container-sm">
                <p className="cursor-default capitalize">
                  {item.contact_type}:{" "}
                </p>
                <p>{item.contact_value}</p>
                <Link
                  to={item.contact_href}
                  className={`contact-btn-sm ${item.icon_style}`}
                  aria-label={item.contact_href}
                >
                  {<item.contact_icon />}
                </Link>
              </div>
            </>
          );
        })}
      </div>
      <section className="p-10 section-border">
        <FooterContent></FooterContent>
      </section>
    </>
  );
}

export default Contactme;
