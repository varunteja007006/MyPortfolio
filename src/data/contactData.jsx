import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { SiGithub } from "react-icons/si";
import { ImLinkedin2 } from "react-icons/im";

const contactData = [
  {
    id: 1,
    contact_type: "email",
    contact_href: "mailto:varunteja007006@gmail.com",
    contact_icon: AiOutlineMail,
    icon_style: "text-2xl",
    contact_value: "varunteja007006@gmail.com",
  },
  {
    id: 2,
    contact_type: "phone",
    contact_href: "tel:+917893798770",
    contact_icon: FiPhone,
    icon_style: "text-2xl",
    contact_value: "+91 7893798770",
  },
  {
    id: 5,
    contact_type: "address",
    contact_href:
      "https://www.google.com/maps?s=web&vet=12ahUKEwjTg4fwpYqCAxUSs1YBHZ3YC0sQ5OUKegQIDRAO..i&cs=1&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kefb-bEhvMs7MRazges72KJm&daddr=796Q%2BX6J,+Bus+Stand+Colony,+Madhura+Nagar,+Shamshabad,+Hyderabad,+Telangana+501218",
    contact_icon: HiOutlineLocationMarker,
    icon_style: "text-2xl",
    contact_value: "Shamshabad, Hyderabad, Pincode - 501218",
  },
  {
    id: 3,
    contact_type: "linkedIn",
    contact_href: "https://www.linkedin.com/in/varunteja007006",
    contact_icon: ImLinkedin2,
    icon_style: "text-2xl",
    contact_value: "https://www.linkedin.com/in/varunteja007006",
  },
  {
    id: 4,
    contact_type: "github",
    contact_href: "https://github.com/varunteja007006",
    contact_icon: SiGithub,
    icon_style: "text-2xl",
    contact_value: "https://github.com/varunteja007006",
  },
];

export default contactData;
