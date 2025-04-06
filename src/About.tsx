import React from "react";
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
  padding: 0 3rem;
  min-height: 100vh;
`;

const Section = styled.section`
  margin-bottom: 4rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  /* background: linear-gradient(45deg, #fff, #a8b2d1); */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  background: linear-gradient(45deg, #2d3436, #636e72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 2.5;
  color: #000;
  margin-bottom: 1.5rem;
  padding: 0 5rem;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 2rem 0 1.5rem 0;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #000;
  max-width: 600px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  background: linear-gradient(45deg, #2d3436, #636e72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;
  color: #000;
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
  border: 1px solid #d53f8c;
  border-radius: 12px;
  padding: 2rem 0;
  margin: 0;
  font-weight: 700;
`;

const StatContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatBox = styled.div`
  background: #d53f8c;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border: 1px solid #d53f8c;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #fff;
`;

export const About: React.FC = () => {
  return (
    <Container>
      <>
        <Section>
          <Title>SSMIET - MentorBridge Product Development Center</Title>
          <Paragraph>
            <a
              href="https://mentorbridge.in"
              className="link"
              target="_blank"
              rel="noreferrer"
            >
              MentorBridge
            </a>
            , established in 2024, operates as a dynamic community of learners,
            leaders, and future innovators. We are committed to building a
            supportive network where students can connect, learn, and grow
            together, all without incurring any costs.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Our Vision</Subtitle>
          <Paragraph>
            Our vision is to empower students by providing them with the
            cutting-edge skills and tools they need to excel in the evolving
            industry landscape and make a seamless transition into successful
            professional careers.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>Our Mission</Subtitle>
          <Paragraph>
            MentorBridge is dedicated to bridging the gap that often exists
            between academia and the professional world. We achieve this by
            providing students with the essential knowledge and practical
            experience that are in high demand by today's employers.
          </Paragraph>
        </Section>

        <Section>
          <Subtitle>What We Do</Subtitle>
          <Paragraph>
            MentorBridge focuses on bridging the gap between academia and
            industry by offering students comprehensive development in the
            following key areas:
          </Paragraph>
          <List>
            <ListItem>
              <strong>Skill Development:</strong>
            </ListItem>
            <Paragraph>
              We provide hands-on training in the latest technologies and tools,
              ensuring students acquire skills that are directly applicable to
              current industry demands.
            </Paragraph>
            <ListItem>
              <strong>Industry Readiness:</strong>
            </ListItem>
            <Paragraph>
              We emphasize practical knowledge and real-world applications,
              preparing students to confidently assume professional roles upon
              graduation.
            </Paragraph>
            <ListItem>
              <strong>Holistic Growth:</strong>
            </ListItem>
            <Paragraph>
              We are committed to developing not only students' technical
              expertise but also essential soft skills, such as effective
              communication and problem-solving abilities, which are crucial for
              long-term career success.
            </Paragraph>
          </List>
        </Section>

        <Section>
          <Subtitle>Our Methodology</Subtitle>
          <List>
            <ListItem>
              <strong>Project-Based Learning:</strong>
            </ListItem>
            <Paragraph>
              Engaging students in hands-on, real-world projects to enhance
              their practical experience.
            </Paragraph>
            <ListItem>
              <strong>Exposure to Industry Standards:</strong>
            </ListItem>
            <Paragraph>
              Students with modern frameworks, tools, and best practices used in
              enterprise application development.
            </Paragraph>
            <ListItem>
              <strong>Mentorship and Guidance:</strong>
            </ListItem>
            <Paragraph>
              Mentorship to support students throughout their learning journey.
            </Paragraph>
          </List>
        </Section>

        <HighlightBox>
          <Paragraph style={{ color: "#fff", textAlign: "center" }}>
            MentorBridge firmly believes that effectively bridging the gap
            between academic learning and the practical demands of the industry
            requires equipping students with both the most relevant technologies
            and a strong foundation in professional development practices.
          </Paragraph>
        </HighlightBox>

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
        </StatContainer>

        <Section>
          <Subtitle>Product Development Center</Subtitle>
          <Paragraph>
            As part of our efforts, we have established a Product Development
            Center at{" "}
            <strong>
              SSM Institute of Engineering and Technology (SSMIET), Dindigul.
            </strong>
            Through this initiative, we have trained <strong>32</strong>{" "}
            students in cutting-edge technologies—completely free of cost. These
            students have successfully developed enterprise-grade applications
            using modern tools and Agile methodologies.
          </Paragraph>
          <Paragraph>
            With the invaluable support and collaboration of the college's{" "}
            <strong>placement team</strong>, dedicated{" "}
            <strong>department faculty</strong>, and the forward-thinking vision
            of the <strong>Principal</strong>, the MentorBridge team
            concentrated on thoroughly grooming these students to excel as
            professionals. This comprehensive preparation included not only
            honing their coding skills but also developing their interview
            proficiency, cultivating a strong understanding of professional
            workplace etiquette, and fostering overall professional conduct.
          </Paragraph>
          <Paragraph>
            We are proud to have successfully achieved our ambitious mission of
            developing three fully functional products using{" "}
            <strong>Agile methodology.</strong> As a direct and measurable
            result of this effort, the participating students have gained
            significant proficiency in industry-standard development tools and
            have attained valuable intermediate-level competency in a variety of
            widely used, modern technologies.
          </Paragraph>
        </Section>
        <HighlightBox>
          <Paragraph style={{ color: "#fff", textAlign: "center" }}>
            Trust the process. Respect the process. Follow the process.
          </Paragraph>
        </HighlightBox>
      </>
    </Container>
  );
};
