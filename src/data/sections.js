import {
  AiFillInstagram,
  AiFillSafetyCertificate,
  FaAward,
  FaBoxOpen,
  FaDev,
  FaSignLanguage,
  GoTools,
  IoIosDocument,
  IoIosPaperPlane,
  MdPerson,
  MdSchool,
  MdWork,
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "work", title: "Work", icon: MdWork },
  { id: "skills", title: "Skills", icon: GoTools },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "achievements", title: "Achievements", icon: FaAward },
  { id: "certifications", title: "Certifications",icon: AiFillSafetyCertificate,},
  { id: "philanthropy", title: "Social", icon: FaBoxOpen },
  { id: "photography", title: "Photography", icon: AiFillInstagram },
  { id: "resume", title: "Resume", icon: IoIosDocument },
  { id: "contact", title: "Contact", icon: IoIosPaperPlane },
];

export default sections;
