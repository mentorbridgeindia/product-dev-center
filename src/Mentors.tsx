import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #2d3436;
  background: linear-gradient(45deg, #2d3436, #636e72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  justify-content: center;
`;

const TabButton = styled.button<{ active: boolean }>`
  padding: 1rem 2rem;
  border: none;
  background: ${({ active }) => (active ? "#d53f8c" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#2d3436")};
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #d53f8c;

  &:hover {
    background: ${({ active }) =>
      active ? "#d53f8c" : "rgba(213, 63, 140, 0.1)"};
  }
`;

const MentorCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.5s ease-out;
  border: 1px solid #d53f8c;
`;

const MentorHeader = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const MentorImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #d53f8c;
`;

const MentorInfo = styled.div`
  flex: 1;
`;

const MentorName = styled.h2`
  font-size: 2rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const MentorTitle = styled.p`
  font-size: 1.2rem;
  color: #636e72;
  margin-bottom: 1rem;
`;

const MentorBio = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d3436;
  margin-bottom: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #d53f8c;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExperienceItem = styled.li`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "▹";
    color: #d53f8c;
    position: absolute;
    left: 0;
  }
`;

const ExperienceTitle = styled.h4`
  font-size: 1.2rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const ExperienceDuration = styled.span`
  font-size: 0.9rem;
  color: #636e72;
`;

const ExperienceDescription = styled.p`
  font-size: 1rem;
  color: #2d3436;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  color: #2d3436;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #d53f8c;
  }
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Skill = styled.span`
  background: rgba(213, 63, 140, 0.1);
  color: #d53f8c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const InterestsList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Interest = styled.li`
  background: rgba(213, 63, 140, 0.1);
  color: #d53f8c;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

const Inspiration = styled.blockquote`
  font-style: italic;
  font-size: 1.1rem;
  color: #636e72;
  padding: 1rem;
  border-left: 4px solid #d53f8c;
  background: rgba(213, 63, 140, 0.05);
  margin: 1rem 0;
`;

const EducationList = styled.ul`
  list-style: none;
  padding: 0;
`;

const EducationItem = styled.li`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: "🎓";
    position: absolute;
    left: 0;
  }
`;

const EducationTitle = styled.h4`
  font-size: 1.2rem;
  color: #2d3436;
  margin-bottom: 0.5rem;
`;

const EducationInstitution = styled.span`
  font-size: 1rem;
  color: #636e72;
  display: block;
  margin-bottom: 0.5rem;
`;

const EducationDuration = styled.span`
  font-size: 0.9rem;
  color: #636e72;
`;

const EducationDescription = styled.p`
  font-size: 1rem;
  color: #2d3436;
  line-height: 1.6;
`;

const FlexBox = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
  ::marker {
    color: #d53f8c;
  }
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1.5rem;
  color: #2d3436;
  font-size: 1.1rem;
  line-height: 1.6;

  &::before {
    content: "▹";
    color: #d53f8c;
    flex-shrink: 0;
  }
`;

interface Education {
  degree: string;
  institution: string;
  duration: string;
  specialization?: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  location?: string;
  description: string;
  skills?: string[];
}

interface Mentor {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
  about: string;
  experience: Experience[];
  education: Education[];
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  interests: string[];
  inspirations?: string[];
  favouriteQuote: string;
  skills: string[];
}

const mentors: Mentor[] = [
  {
    id: "senthil-kumar-thangavel",
    name: "Senthil Kumar Thangavel",
    title: "Senior Specialist - Software Engineering | Education Mentor",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHUoLjgNunuMA/profile-displayphoto-shrink_400_400/B56ZTqbjdZHEAg-/0/1739099895298?e=1750896000&v=beta&t=usoOa-BVG3hzml_eNkjsr_z0N2AXS3oLKxRbYfOIpBk",
    bio: "Steering the helm at LTIMindTree as a Senior Specialist in Software Engineering, crafting high-performance web applications that drive business success. With a solid foundation in the MERN stack and JAVA Spring Boot over a decade of experience, specialized in developing scalable solutions that enhance user experience and operational efficiency.",
    about:
      "My inspirations, the books I've read, and the wisdom from my grandfathers have taught me a valuable lesson: <strong>what we give to the world with sincerity and dedication, returns to us in double measure</strong>. This understanding led me to mentorship, a support I lacked during my college years. I aspire to be the mentor I once needed, fostering collective growth in a world where material wealth often overshadows human values." +
      "<br/>" +
      "<br/>" +
      "My technical prowess is complemented by a profound passion for mentorship, which has enriched my professional journey. Over the years, I've guided students with career advice and technical insights, facilitating their transition from academia to the professional world. " +
      "<br/>" +
      "<br/>" +
      "I have chosen to offer my guidance to students without any financial expectations. My aim is to contribute to the society that has enriched me in countless ways. I am particularly driven to assist students, especially those from rural areas, who are eager to learn and grow. In my view, when you extend help to someone, it should be without expecting anything in return. Monetary gains lose their significance when the goal is to assist someone in need.",
    education: [
      {
        degree: "Master of Business Administration (MBA)",
        institution: "SRM Institute of Science and Technology (SRMIST)",
        duration: "Jul 2024 - Apr 2026",
        specialization: "Business Analytics",
      },
      {
        degree: "Bachelor of Engineering (BE)",
        institution: "M.KUMARASAMY COLLEGE OF ENGINEERING, KARUR",
        duration: "2009 - 2013",
        specialization: "Electrical and Electronics Engineering",
      },
    ],
    experience: [
      {
        title: "Senior Specialist - Software Engineering",
        company: "LTIMindTree",
        duration: "Oct 2024 - Present",
        location: "Coimbatore, Tamil Nadu, India · Hybrid",
        description:
          "Leading the development of scalable solutions using MERN stack, focusing on enhancing user experience and operational efficiency. Solving complex technical challenges leading to measurable improvements in system performance.",
        skills: ["React.js", "Micro Frontend", "MERN Stack", "System Design"],
      },
      {
        title: "Senior Fullstack Engineer",
        company: "OroCommerce",
        duration: "Nov 2023 - Sep 2024",
        location: "United States · Remote",
        description:
          "Led full-stack development using MERN stack, implementing innovative solutions and best practices in software engineering.",
        skills: ["MERN Stack", "React.js", "Node.js", "TypeScript", "MongoDB"],
      },
      {
        title: "Senior Technical System Analyst",
        company: "Tata Consultancy Services",
        duration: "Feb 2014 - Nov 2023",
        location: "Brussels Area, Belgium · On-site",
        description:
          "Led technical system analysis and development of enterprise applications, focusing on scalable and maintainable solutions.",
        skills: ["React.js", "HTML", "CSS", "JavaScript", "System Analysis"],
      },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/senthilk979/",
      github: "https://github.com/senthil-kumar",
      twitter: "https://twitter.com/senthil-kumar",
    },
    interests: ["Reading Books", "Mentoring", "Writing Blogs"],
    favouriteQuote: "Be the change that you wish to see in the world",
    skills: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Spring Boot",
      "MongoDB",
      "Micro Frontend",
      "Technical Leadership",
      "Mentorship",
      "Strategic Planning",
      "Training & Development",
    ],
    inspirations: [
      "Methagu Vellupillai Prabhakaran",
      "King Maker Kamaraj",
      "Lee Kuan Yew",
      "Selvi J. Jayalalitha",
      "Adolf Hitler",
    ],
  },
  {
    id: "dhileepan-dhanapal",
    name: "Dhileepan Dhanapal",
    title: "Senior Specialist - Cloud | Mentor",
    image: "https://secure.gravatar.com/avatar/default?s=400&d=identicon",
    bio: "A seasoned software engineer with over a decade of experience in enterprise application development. Specialized in Java, Spring, and cloud technologies with extensive experience in both European and Indian markets.",
    about:
      "Dhileepan has built a successful career spanning multiple countries and industries, working with leading organizations in both Europe and India. His expertise in Java, Spring, and cloud technologies, combined with his experience in mentoring, makes him an invaluable guide for students entering the IT industry.",
    experience: [
      {
        title: "Senior Java Developer",
        company: "LTIMindtree",
        duration: "Aug 2024 - Present",
        location: "Coimbatore, Tamil Nadu, India · Hybrid",
        description:
          "Working on enterprise applications using AWS, Microservices, and modern Java technologies.",
        skills: ["AWS", "Microservices", "Java", "Spring", "Cloud Computing"],
      },
      {
        title: "Senior Software Engineer",
        company: "PureSoftware Ltd",
        duration: "Jan 2024 - Aug 2024",
        location: "Delhi, India · Remote",
        description:
          "Developed and maintained enterprise applications using ActiveMQ and ELK stack.",
        skills: ["ActiveMQ", "ELK Stack", "Java", "Spring Boot"],
      },
      {
        title: "Dev Engineer",
        company: "BNP Paribas Fortis",
        duration: "Sep 2019 - Aug 2024",
        location: "Brussels, Belgium · On-site",
        description:
          "Worked on banking applications using Spring Framework and Spring Security.",
        skills: [
          "Spring Framework",
          "Spring Security",
          "Java",
          "Microservices",
          "Cloud",
        ],
      },
      {
        title: "IT Analyst",
        company: "Tata Consultancy Services",
        duration: "Dec 2016 - Sep 2019",
        location: "Brussels Region, Belgium · On-site",
        description:
          "Developed and maintained enterprise applications using Kafka and Java technologies.",
        skills: ["Kafka", "Java", "Spring", "Microservices", "Cloud"],
      },
      {
        title: "Senior Software Engineer",
        company: "Newgen Software Technologies Limited",
        duration: "Oct 2012 - Nov 2016",
        location: "Chennai, India",
        description: "Worked on BPM solutions and enterprise applications.",
        skills: [
          "Newgen BPM",
          "Linux",
          "Java",
          "Spring",
          "Enterprise Applications",
        ],
      },
    ],
    education: [
      {
        degree: "Master of Business Administration (MBA)",
        specialization: "Business Analytics",
        institution: "SRM Institute of Science and Technology (SRMIST)",
        duration: "Jul 2024 - Apr 2026",
      },
      {
        degree: "Bachelor of Technology (B.Tech)",
        specialization: "Information Technology",
        institution: "Shri Angalamman College of Engineering and Technology",
        duration: "2006 - 2010",
      },
    ],
    social: {
      linkedin: "https://www.linkedin.com/in/dhileepan-dhanapal-31901224/",
      github: "https://github.com/dhileepan",
      twitter: "https://twitter.com/dhileepan",
    },
    interests: [
      "Cloud Computing",
      "Enterprise Applications",
      "Mentoring",
      "Business Analytics",
    ],
    favouriteQuote:
      "The best way to learn is to teach. By mentoring others, we not only help them grow but also reinforce our own knowledge.",
    skills: [
      "Java",
      "Spring Framework",
      "Spring Boot",
      "Spring Security",
      "Microservices",
      "AWS",
      "Kafka",
      "ActiveMQ",
      "ELK Stack",
      "Cloud Computing",
      "Linux",
      "Enterprise Applications",
      "Business Process Management",
      "Business Analytics",
    ],
  },
];

export const Mentors: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Container>
      <Title>Our Mentors</Title>
      <TabContainer>
        {mentors.map((mentor, index) => (
          <TabButton
            key={mentor.id}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {mentor.name}
          </TabButton>
        ))}
      </TabContainer>

      {mentors.map((mentor, index) => (
        <MentorCard
          key={mentor.id}
          style={{ display: activeTab === index ? "block" : "none" }}
        >
          <MentorHeader>
            <MentorImage src={mentor.image} alt={mentor.name} />
            <MentorInfo>
              <MentorName>{mentor.name}</MentorName>
              <MentorTitle>{mentor.title}</MentorTitle>
              <MentorBio>{mentor.bio}</MentorBio>
              <SocialLinks>
                <SocialLink
                  href={mentor.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </SocialLink>
                <SocialLink
                  href={mentor.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </SocialLink>
                <SocialLink
                  href={mentor.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </SocialLink>
              </SocialLinks>
            </MentorInfo>
          </MentorHeader>

          <Section>
            <SectionTitle>About</SectionTitle>
            <MentorBio dangerouslySetInnerHTML={{ __html: mentor.about }} />
          </Section>

          <FlexBox>
            {mentor.education && (
              <Section>
                <SectionTitle>Education</SectionTitle>
                <EducationList>
                  {mentor.education.map((edu, idx) => (
                    <EducationItem key={idx}>
                      <EducationTitle>{edu.degree}</EducationTitle>
                      <EducationInstitution>
                        {edu.institution}
                      </EducationInstitution>
                      {edu.specialization && (
                        <EducationDescription>
                          Specialization: {edu.specialization}
                        </EducationDescription>
                      )}
                      <EducationDuration>{edu.duration}</EducationDuration>
                    </EducationItem>
                  ))}
                </EducationList>
              </Section>
            )}

            <Section>
              <SectionTitle>Experience</SectionTitle>
              <ExperienceList>
                {mentor.experience.map((exp, idx) => (
                  <ExperienceItem key={idx}>
                    <ExperienceTitle>
                      {exp.title} at {exp.company}
                    </ExperienceTitle>
                    <ExperienceDuration>
                      {exp.duration}
                      {exp.location && ` · ${exp.location}`}
                    </ExperienceDuration>
                    {/* <ExperienceDescription>
                      {exp.description}
                    </ExperienceDescription> */}
                    {/* {exp.skills && exp.skills.length > 0 && (
                    <SkillsContainer>
                      {exp.skills.map((skill: string, skillIdx: number) => (
                        <Skill key={skillIdx}>{skill}</Skill>
                      ))}
                    </SkillsContainer>
                  )} */}
                  </ExperienceItem>
                ))}
              </ExperienceList>
            </Section>
          </FlexBox>

          <Section>
            <SectionTitle>Skills</SectionTitle>
            <SkillsContainer>
              {mentor.skills.map((skill, idx) => (
                <Skill key={idx}>{skill}</Skill>
              ))}
            </SkillsContainer>
          </Section>

          <Section>
            <SectionTitle>Interests</SectionTitle>
            <InterestsList>
              {mentor.interests.map((interest, idx) => (
                <Interest key={idx}>{interest}</Interest>
              ))}
            </InterestsList>
          </Section>

          <Section>
            <SectionTitle>Favourite Quote</SectionTitle>
            <Inspiration>{mentor.favouriteQuote}</Inspiration>
          </Section>

          {mentor.inspirations && (
            <Section>
              <SectionTitle>Inspirations</SectionTitle>
              <List>
                {mentor.inspirations?.map((inspiration, idx) => (
                  <ListItem key={idx}>{inspiration}</ListItem>
                ))}
              </List>
            </Section>
          )}
        </MentorCard>
      ))}
    </Container>
  );
};
