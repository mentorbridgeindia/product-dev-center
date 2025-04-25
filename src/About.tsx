import React from "react";
import { Link } from "react-router-dom";
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

const isDesktop = window.innerWidth > 1200;

const Container = styled.div`
  padding: ${isDesktop ? "0 3rem" : "0"};
  min-height: 100vh;
  /* max-width: 1200px; */
  margin: 0 auto;
  margin-bottom: 5rem;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.5s ease-out;
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

const Quote = styled.blockquote`
  font-style: italic;
  font-size: 1.2rem;
  color: #636e72;
  text-align: center;
  margin: 2rem 0;
  padding: 1rem;
  border-left: 4px solid #d53f8c;
  background: rgba(213, 63, 140, 0.05);
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2d3436;
  margin-bottom: 1.5rem;
  padding: ${isDesktop ? "0 2rem" : "0"};
  line-height: 2.3;
`;

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  color: #2d3436;
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0;
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

const HighlightBox = styled.div`
  background: #d53f8c;
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
  color: #fff;
`;

const StatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatBox = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 2px solid #d53f8c;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #d53f8c;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #2d3436;
`;

const TrainingSection = styled.div`
  background: rgba(213, 63, 140, 0.05);
  border-radius: 12px;
  padding: 2rem;
  margin: 2rem 0;
`;

const TrainingTitle = styled.h3`
  font-size: 1.5rem;
  color: #d53f8c;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const MentorContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
`;

const MentorCard = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid #d53f8c;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const MentorLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const MentorImage = styled.img`
  height: 200px;
  object-fit: contain;
  border-radius: 20px !important;
`;

const MentorName = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-top: 1rem;
  text-align: center;
`;

export const About: React.FC = () => {
  return (
    <Container>
      <Section>
        <Title>MentorBridge at SSMIET</Title>
        <Subtitle style={{ display: "block", textAlign: "center" }}>
          Bridging the Gap Between Learning and Industry
        </Subtitle>
        <Quote>
          "Education is the passport to the future, for tomorrow belongs to
          those who prepare for it today." – Malcolm X
        </Quote>
        <Paragraph>
          After spending almost half a decade in Europe and more than a decade
          in IT industry, <strong>Senthil Kumar</strong>, software engineer by
          profession, has noticed that there was no proper guidance for students
          especially from rural areas to get into the IT industry. Senthil Kumar
          volunteered for various college events to guide students mentored them
          and helped them to prepare for their career.
        </Paragraph>
        <Paragraph>
          <strong>Senthil Kumar</strong>, along with his like-minded friend,
          <strong>Dhileepan Dhanapal</strong>, decided to give back to the
          society through Education. They started <strong>MentorBridge</strong>{" "}
          in <strong>2024</strong> as a <i>Not-For-Profit community</i> to train
          students from rural areas in the latest technologies and prepare them
          for the real world.
        </Paragraph>
        <Paragraph>
          Initially, they mentored students online through Microsoft Teams.
          However, they soon realized that they needed to be physically present
          with the students to provide them with the best possible guidance.
          Hence, they pitched the idea to the management of{" "}
          <strong>SSM Institute of Engineering and Technology (SSMIET)</strong>.
        </Paragraph>
        <Paragraph>
          Principal of SSMIET and the placement team were also supportive of the
          initiative and provided the necessary resources to start the training
          program. Just like the coordinators, management team of SSMIET also
          believe in the power of education to transform lives.
        </Paragraph>
        <Paragraph>
          In the founded year 2024, the MentorBridge took a significant step
          towards preparing students for the real world by launching{" "}
          <strong>Product Developement Center</strong> at SSMIET. This
          initiative is more than just a training program; it's a community
          where learners become leaders, and ideas transform into
          innovations—all at no cost to the students.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>🎯 Our Vision</Subtitle>
        <Paragraph>
          To empower students with the latest skills and tools, enabling them to
          thrive in the ever-evolving industry landscape and smoothly transition
          into successful professional careers.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>🛤️ Our Mission</Subtitle>
        <Paragraph>
          MentorBridge is dedicated to closing the gap between academic learning
          and the professional world. We achieve this by providing students with
          essential knowledge and practical experiences that are highly valued
          by today's employers.
        </Paragraph>
      </Section>

      <Section>
        <Subtitle>🛠️ What We Do</Subtitle>
        <List>
          <ListItem>
            <strong>Skill Development</strong>
          </ListItem>
          <Paragraph>
            We offer hands-on training in the latest technologies and tools,
            ensuring students acquire skills that are directly applicable to
            current industry demands.
          </Paragraph>
          <ListItem>
            <strong>Industry Readiness</strong>
          </ListItem>
          <Paragraph>
            Our focus is on practical knowledge and real-world applications,
            preparing students to confidently step into professional roles upon
            graduation.
          </Paragraph>
          <ListItem>
            <strong>Holistic Growth</strong>
          </ListItem>
          <Paragraph>
            Beyond technical expertise, we emphasize the development of soft
            skills such as effective communication and problem-solving
            abilities, which are crucial for long-term career success.
          </Paragraph>
        </List>
      </Section>

      <Section>
        <Subtitle>📚 Our Methodology</Subtitle>
        <List>
          <ListItem>
            <strong>Project-Based Learning</strong>
          </ListItem>
          <Paragraph>
            Students engage in real-world projects, enhancing their practical
            experience and understanding of industry standards.
          </Paragraph>
          <ListItem>
            <strong>Exposure to Industry Standards</strong>
          </ListItem>
          <Paragraph>
            We familiarize students with modern frameworks, tools, and best
            practices used in enterprise application development.
          </Paragraph>
          <ListItem>
            <strong>Mentorship and Guidance</strong>
          </ListItem>
          <Paragraph>
            Experienced mentors support students throughout their learning
            journey, providing valuable insights and feedback.
          </Paragraph>
        </List>
      </Section>

      <Section>
        <Subtitle>🏢 Product Development Center at SSMIET</Subtitle>
        <Paragraph>
          <i>
            With the support of the SSM Institute of Engineering and Technology
            (SSMIET) placement team, dedicated faculties, and the visionary
            leadership of the Principal, MentorBridge has trained 32 students in
            cutting-edge technologies—completely <strong>free of cost</strong>.
            These 32 students have successfully developed enterprise-grade
            applications using modern tools by following{" "}
            <strong>Agile methodology</strong>.
          </i>
        </Paragraph>
        <Quote>
          "Tell me and I forget. Teach me and I remember. Involve me and I
          learn." – Benjamin Franklin
        </Quote>
        <Paragraph>
          Training Program commenced since first week of November 2024. Training
          continued every day from <strong>10 AM to 5:00 PM</strong> including
          Saturdays. Training was postponed only during Internal & Semester
          exams.
        </Paragraph>
        <Paragraph>
          <i>
            Mentors go to college every day and sit with students for the whole
            day including <strong>Saturdays</strong>. Trainings, development,
            meetings and other activities were conducted daily.
          </i>
        </Paragraph>
        <TrainingSection>
          <TrainingTitle>Training Program Phases</TrainingTitle>
          <Paragraph>
            The training program was divided into 3 phases:
            <List>
              <ListItem>Technical Training</ListItem>
              <ListItem>Product Development</ListItem>
              <ListItem>Job Preparation</ListItem>
            </List>
          </Paragraph>
        </TrainingSection>
      </Section>

      <Section>
        <Subtitle>🧭 Training Program Overview</Subtitle>
        <TrainingSection>
          <TrainingTitle>
            Foundation in Development / Information Technology
          </TrainingTitle>
          <List>
            <ListItem>
              Introduction to Modern Development: Gave a comprehensive overview
              of the evolution of modern development.
            </ListItem>
            <ListItem>
              Case Study: How an IT company works, from the hiring process to
              the development of a product, and from the Request For Proposal
              (RFP) to the delivery of the product.
            </ListItem>
            <ListItem>
              AI and its applications in the IT industry. Data Science and
              Machine Learning significance in the IT industry.
            </ListItem>
          </List>
        </TrainingSection>

        <TrainingSection>
          <TrainingTitle>Technical Training</TrainingTitle>
          <List>
            <ListItem>
              Intensive training in HTML, CSS, JavaScript, React, Redux,
              Node.js, Express, and MongoDB with real-time scenarios to build
              frontend applications.
            </ListItem>
            <ListItem>
              Provided comprehensive training in Java, Spring Boot, Rest API,
              Swagger, AWS, Cloud Computing, and Docker, incorporating practical
              examples and real-world scenarios.
            </ListItem>
          </List>
        </TrainingSection>

        <TrainingSection>
          <TrainingTitle>Version Control and Collaboration</TrainingTitle>
          <ListItem>
            Training in Git and GitHub, teaching essential commands and
            workflows for effective version control and team collaboration.
          </ListItem>
          <ListItem>
            Creating Pull Requests, and merging them into the main branch.
            Resolving merge conflicts, and managing branches.
          </ListItem>
        </TrainingSection>

        <TrainingSection>
          <TrainingTitle>Self-Improvement Phase</TrainingTitle>
          <Paragraph>
            Introduced the concept of <strong>"5 Cuts Per Day"</strong>—students
            practiced five daily activities consistently:
          </Paragraph>
          <List>
            <ListItem>Communication</ListItem>
            <ListItem>Analytical Skills</ListItem>
            <ListItem>Coding Practice</ListItem>
            <ListItem>Article Reading</ListItem>
            <ListItem>Self-Introduction Preparation</ListItem>
          </List>
        </TrainingSection>

        <TrainingSection>
          <TrainingTitle>Interview Preparation</TrainingTitle>
          <List>
            <ListItem>Communication and presentation skills</ListItem>
            <ListItem>Self-introduction improvement</ListItem>
            <ListItem>Resume polishing and mock interviews</ListItem>
            <ListItem>
              Mock interviews with experienced mentors to prepare students for
              real-world interviews.
            </ListItem>
            <ListItem>LinkedIn profile optimization</ListItem>
          </List>
        </TrainingSection>

        <TrainingSection>
          <TrainingTitle>Product Development Phase</TrainingTitle>
          <List>
            <ListItem>
              <strong>Ideation to Execution:</strong>
            </ListItem>
            <Paragraph>
              Students and Mentors brainstormed three product ideas and divided
              into teams based on interest & skills (frontend/backend/designing)
            </Paragraph>
            <ListItem>
              <strong>Agile Methodology:</strong>
            </ListItem>
            <Paragraph>
              Training in Scrum practices: sprint planning, daily stand-ups,
              spring review, sprint retrospective, and task tracking via Jira
              and Confluence
            </Paragraph>
            <ListItem>
              <strong>Work Division:</strong>
            </ListItem>
            <Paragraph>
              Tasks were divided into epics and user stories, assigned to team
              members through Jira and they were responsible for their own
              tasks.
            </Paragraph>
            <ListItem>
              <strong>Code Quality:</strong>
            </ListItem>
            <Paragraph>
              Every single piece of code was reviewed by mentors to ensure it
              meets industry standards and best practices. Students were also
              encouraged to write review peer code.
            </Paragraph>
          </List>
        </TrainingSection>

        <TrainingSection>
          <TrainingTitle>Real-World Work Culture Simulation</TrainingTitle>
          <List>
            <ListItem>Daily team meetings via Microsoft Teams</ListItem>
            <ListItem>
              Collaborative issue resolution and team coordination
            </ListItem>
            <ListItem>
              Active communication in English, enhancing fluency and confidence
            </ListItem>
            <ListItem>
              Feedback sessions to improve the product and team performance
            </ListItem>
          </List>
        </TrainingSection>

        <TrainingSection>
          <TrainingTitle>Advanced Technical Concepts</TrainingTitle>
          <Paragraph>
            Introduced advanced technical concepts to students to enhance their
            understanding of the industry and prepare them for the real world.
          </Paragraph>
          <List>
            <ListItem>AWS, Docker, Jenkins, and containerization</ListItem>
            <ListItem>
              Firebase Cloud Messaging (FCM), Deep Linking, and Push
              Notifications
            </ListItem>
            <ListItem>
              Deployment using Vercel & AWS using EC2 instances
            </ListItem>
            <ListItem>Code Quality Analysis using SonarQube</ListItem>
            <ListItem>CI/CD Pipeline using Jenkins, and Docker</ListItem>
          </List>
        </TrainingSection>
      </Section>
      <Section>
        <Subtitle>📈 Our Achievements</Subtitle>
        <StatContainer>
          <StatBox>
            <StatNumber>32</StatNumber>
            <StatLabel>Students Trained</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber>3</StatNumber>
            <StatLabel>Products Developed</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber>100%</StatNumber>
            <StatLabel>Industry Focused</StatLabel>
          </StatBox>
          <StatBox>
            <StatNumber>120+</StatNumber>
            <StatLabel>Days Training</StatLabel>
          </StatBox>
        </StatContainer>
      </Section>
    </Container>
  );
};
