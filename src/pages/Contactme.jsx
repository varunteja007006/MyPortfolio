import { Link } from "react-router-dom";
import { contacts } from "../data";
import FooterContent from "../components/footer/FooterContent";

function Contactme() {
  return (
    <>
      <div className="my-12 mx-12">
        <h1 className="text-4xl mb-5">Contact Me</h1>
        {contacts.map((item) => {
          return (
            <>
              {/* large screen */}
              <div key={item.id} className="hidden md:contact-container-lg">
                <div className="p-2">
                  <p className="cursor-default capitalize">
                    {item.contact_type}:{" "}
                  </p>
                </div>
                <div className="p-2">
                  <p className="cursor-default">{item.contact_value}</p>
                </div>
                <div className="px-2">
                  <Link
                    to={item.contact_href}
                    className={`contact-btn-lg ${item.icon_style} motion-safe:animate-wiggle`}
                    aria-label={item.contact_href}
                  >
                    {<item.contact_icon />}
                  </Link>
                </div>
              </div>
              {/* Small screen */}
              <div
                key={item.id}
                className="md:hidden contact-container-sm"
              >
                <div className="flex flex-wrap flex-row gap-2 break-all">
                  <p className="cursor-default capitalize">
                    {item.contact_type}:{" "}
                  </p>
                  <>{item.contact_value}</>
                </div>
                <div>
                  <Link
                    to={item.contact_href}
                    className={`contact-btn-sm ${item.icon_style}`}
                    aria-label={item.contact_href}
                  >
                    {<item.contact_icon />}
                  </Link>
                </div>
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
