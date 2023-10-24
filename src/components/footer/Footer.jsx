import { motion } from "framer-motion";
import { contacts } from "../../data";
import FooterContent from "./FooterContent";

function Footer() {
  const containerEffect = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemEffect = {
    hidden: { y: 200, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.footer
      className="min-h-64 p-10 section-border dark:bg-slate-900 dark:text-white"
      variants={containerEffect}
      initial="hidden"
      animate="visible"
    >
      <section className="footer-content h-36">
        {contacts.map((item) => {
          return (
            <motion.a
              key={item.id}
              whileHover={{ scale: 1.02 }}
              className={`${item.icon_style} contact-btn-lg tooltip`}
              variants={itemEffect}
              href={item.contact_href}
              data-tip={item.contact_type}
              aria-label={item.contact_href}
            >
              {<item.contact_icon />}
            </motion.a>
          );
        })}
      </section>
      <FooterContent></FooterContent>
    </motion.footer>
  );
}

export default Footer;
