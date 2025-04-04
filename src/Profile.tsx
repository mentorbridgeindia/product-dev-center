import { useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { ProfilesList } from "./profiles";

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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const BreadcrumbContainer = styled.div`
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  justify-content: space-between;
`;

const BreadcrumbList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  max-width: 1200px;
  /* margin: 0 auto; */
  justify-content: flex-start;
`;

const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

const BreadcrumbLink = styled.a`
  color: #a8b2d1;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    color: #64ffda;
    background: rgba(100, 255, 218, 0.05);
    transform: translateY(-1px);
  }

  &::before {
    content: "⌂";
    font-size: 1rem;
    color: #64ffda;
  }
`;

const BreadcrumbSeparator = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  &::after {
    content: "›";
  }
`;

const BreadcrumbCurrent = styled.span`
  color: #64ffda;
  font-size: 0.9rem;
  padding: 0.5rem 0.8rem;
  background: rgba(100, 255, 218, 0.05);
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(100, 255, 218, 0.1);

  &::before {
    content: "👤";
    font-size: 1rem;
  }
`;

const Container = styled.div`
  padding: 2rem;
  margin: 0 auto;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
`;

const ProfileCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 24px;
  padding: 2.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: ${fadeIn} 0.6s ease-out;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
`;

const ProfileImage = styled.img`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const Name = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  margin: 0;
  background: linear-gradient(45deg, #fff, #a8b2d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 0.5rem;
`;

const Role = styled.h2`
  font-size: 1.6rem;
  color: #a8b2d1;
  margin: 0.5rem 0;
  font-weight: 500;
`;

const Summary = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccd6f6;
  margin: 1.5rem 0;
`;

const Section = styled.section`
  margin: 2.5rem 0;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s ease-out;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "▹";
    color: #64ffda;
  }
`;

const ExperienceItem = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 15px;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  &:hover {
    transform: translateX(10px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const Company = styled.h4`
  font-size: 1.3rem;
  color: #fff;
  margin: 0 0 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ExperienceRole = styled.p`
  font-size: 1.1rem;
  color: #64ffda;
  margin: 0 0 0.5rem 0;
  font-weight: 500;
`;

const ExperienceSummary = styled.p`
  font-size: 1rem;
  color: #ccd6f6;
  line-height: 1.8;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillTag = styled.span`
  background: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.6rem 1.2rem;
  border-radius: 25px;
  font-size: 0.9rem;
  border: 1px solid rgba(100, 255, 218, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
    transform: translateY(-2px);
  }
`;

const InspirationItem = styled.li`
  margin-bottom: 0.8rem;
  color: #ccd6f6;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "▹";
    color: #64ffda;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const SocialLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    color: #64ffda;
    transform: translateY(-2px);
  }
`;

const Email = styled.p`
  font-weight: 500;
  color: #64ffda;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "✉";
  }
`;

const DownloadButton = styled.button`
  background: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }
`;

const WebsiteLink = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: #fff;
    transform: translateX(5px);
  }
`;

export const Profile = () => {
  const params = useParams();
  if (!params.id) return <>No Profile found!</>;
  const profileData = ProfilesList.find((profile) => profile.id === params.id);

  const downloadResume = () => {
    if (profileData) {
      const url =
        "https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/" +
        profileData.id +
        ".pdf";
      if (url) {
        window.open(url, "_blank");
      }
    }
  };

  return profileData ? (
    <div>
      <Container>
        <BreadcrumbContainer>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbCurrent>{profileData.name}</BreadcrumbCurrent>
            </BreadcrumbItem>
          </BreadcrumbList>
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <img
              src="https://ssmiet.ac.in/images/logo.png"
              alt="ssmiet"
              className="logo-sm"
            />
            <img
              src="https://www.mentorbridge.in/_next/static/media/icon-logo-horizontal.2500857b.svg"
              className="logo-sm"
              alt="mentorbridge"
            />
          </div>
        </BreadcrumbContainer>
        <ProfileCard>
          <Header>
            <ProfileImage
              src={`https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/${profileData.id}.${profileData.picture}`}
              alt={profileData.name}
            />
            <HeaderInfo>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Name>{profileData.name}</Name>
                <DownloadButton onClick={downloadResume}>
                  <span>📄</span> Download Resume
                </DownloadButton>
              </div>
              <Role>{profileData.role}</Role>
              <Summary>
                <div
                  dangerouslySetInnerHTML={{ __html: profileData.summary }}
                />
              </Summary>
              <Email>{profileData.email}</Email>
              <SocialLinksContainer>
                <SocialLink
                  href={profileData.socialLinks.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>🔗</span> LinkedIn
                </SocialLink>
                <SocialLink
                  href={profileData.socialLinks.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>💻</span> GitHub
                </SocialLink>
                {profileData.socialLinks.website && (
                  <SocialLink
                    href={profileData.socialLinks.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>🌐</span> Website
                  </SocialLink>
                )}
              </SocialLinksContainer>
            </HeaderInfo>
          </Header>

          <Section>
            <SectionTitle>Skills</SectionTitle>
            <SkillsContainer>
              {profileData.skillSets.map((skill, index) => (
                <SkillTag key={index}>{skill}</SkillTag>
              ))}
            </SkillsContainer>
          </Section>

          <Section>
            <SectionTitle>Experience</SectionTitle>
            <ExperienceItem>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <Company>{profileData.mentorBridgeExp.company}</Company>
                {profileData.mentorBridgeExp.website && (
                  <WebsiteLink
                    href={profileData.mentorBridgeExp.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>🌐</span> Visit Website
                  </WebsiteLink>
                )}
              </div>
              <ExperienceRole>
                {profileData.mentorBridgeExp.role}
              </ExperienceRole>
              <ExperienceSummary>
                <div
                  dangerouslySetInnerHTML={{
                    __html: profileData.mentorBridgeExp.summary,
                  }}
                />
              </ExperienceSummary>
            </ExperienceItem>
          </Section>

          <Section>
            <SectionTitle>Internships</SectionTitle>
            {profileData.experience.map((exp, index) => (
              <ExperienceItem key={index}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "1rem",
                  }}
                >
                  <Company>{exp.company}</Company>
                  {exp.website && (
                    <WebsiteLink
                      href={exp.website}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>🌐</span> Visit Website
                    </WebsiteLink>
                  )}
                </div>
                <ExperienceRole>{exp.role}</ExperienceRole>
                <ExperienceSummary>
                  <div dangerouslySetInnerHTML={{ __html: exp.summary }} />
                </ExperienceSummary>
              </ExperienceItem>
            ))}
          </Section>

          <Section>
            <SectionTitle>Inspirations</SectionTitle>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {profileData.inspirations.map((inspiration, index) => (
                <InspirationItem key={index}>{inspiration}</InspirationItem>
              ))}
            </ul>
          </Section>
        </ProfileCard>
      </Container>
    </div>
  ) : (
    <>No Profile found!</>
  );
};
