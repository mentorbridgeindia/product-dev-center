import { ProfileData } from "./Profile.types";

export const ProfilesList: ProfileData[] = [
  {
    id: "john",
    name: "John Doe",
    picture: "https://randomuser.me/api/portraits/men/1.jpg",
    role: "Frontend Dev Engineer",
    email: "johndoe@gmaail.com",
    resumeLink: "https://randomuser.me/api/portraits/men/1.jpg",
    summary:
      "<ul><li>Designed product interfaces and user flows, contributing to the overall user experience of the platform.</li><li>Created API documentation to facilitate easy understanding and implementation.</li></ul>",
    experience: [
      {
        company: "Tech Solutions Inc.",
        role: "Senior Software Engineer",
        summary:
          "<ul><li>Designed product interfaces and user flows, contributing to the overall user experience of the platform.</li><li>Created API documentation to facilitate easy understanding and implementation.</li></ul>",
        website: "http://stupro.info",
      },
      {
        company: "Innovate Labs",
        role: "Software Engineer",
        summary:
          "<ul><li>Designed product interfaces and user flows, contributing to the overall user experience of the platform.</li><li>Created API documentation to facilitate easy understanding and implementation.</li></ul>",
        website: "http://stupro.info",
      },
    ],
    mentorBridgeExp: {
      company: "StuPro",
      role: "Co-Founder | Backend Dev Engineer",
      summary:
        "<ul><li>Designed product interfaces and user flows, contributing to the overall user experience of the platform.</li><li>Created API documentation to facilitate easy understanding and implementation.</li></ul>",
      website: "http://stupro.info",
    },
    skillSets: [
      "React",
      "TypeScript",
      "Node.js",
      "Python",
      "AWS",
      "Docker",
      "CI/CD",
    ],
    inspirations: ["APJ Abdul Kalam", "Peter Thiel"],
    socialLinks: {
      linkedIn: "https://linkedin.com/in/johndoe",
      gitHub: "https://github.com/johndoe",
      website: "https://johndoe.dev",
    },
  },
];
