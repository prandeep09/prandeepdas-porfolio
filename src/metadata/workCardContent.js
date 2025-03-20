import cricketWAvatar from "../assets/CricketW-avatar.svg";
import InstaFAvatar from "../assets/Instafinacials-avatar.svg";
import InstaFinHeroImage from "../assets/Insafinancials hero image.svg";
import InstaFinHeroMobile from "../assets/image- instafinancials mobile view.svg";
import changeSubOui from "../assets/change-sub-oui.svg";
import changeSubNui from "../assets/change-sub-nui.svg";
const workCardContent = [
  {
    id: "CS01CSS",
    appname: "VOYAGE",
    apptype: "Customer Service Portal",
    casetitile: "A feature redesign project",
    casedescription: `How my redesign resulted in a 75% reduction in...`,
    caselink: "/casestudy01",
    caselinktext: "Read the Cricket wireless case study",
    companyname: "Cricket Wireless",
    year: "2023",
    avatar: cricketWAvatar,
    image1: changeSubNui,
    image2: changeSubOui,
    background: "gradient-green",
  },
  {
    id: "CS02IF",
    appname: "InstaFinancials",
    apptype: "A fintech website",
    casetitile: "Complete website redesign",
    casedescription: `How I revamped a B2B website with limited resources... `,
    caselink: "/casestudy02",
    caselinktext: "Read the InstaFinancials case study",
    companyname: "InstaFinancials",
    year: "2018-21",
    avatar: InstaFAvatar,
    image1: InstaFinHeroImage,
    image2: InstaFinHeroMobile,
    background: "gradient-blue",
  },
];

export default workCardContent;
