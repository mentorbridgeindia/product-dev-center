import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { Header, Subtitle } from "./Products";
import { ProfileData } from "./Profile.types";
import { ProfilesList } from "./profiles";

interface Theme {
  colors: {
    background: string;
    card: string;
    text: string;
    textSecondary: string;
    primary: string;
    secondary: string;
    accent: string;
  };
}

const isDesktop = window.innerWidth > 1024;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

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

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const PersonImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    animation: ${pulse} 1s infinite;
  }
`;

const InfoContainer = styled.a`
  flex: 1;
  text-decoration: none;
  cursor: pointer;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  margin: 0 0 0.5rem 0;
  background: linear-gradient(45deg, #2d3436, #636e72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
`;

const Role = styled.p`
  font-size: 1rem;
  color: #636e72;
  margin: 0;
  text-align: center;
  font-weight: 500;
`;

const PersonCard = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const SearchContainer = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
  }
`;

const FilterSelect = styled.select`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.95);
  }
`;

const PersonItem: React.FC<{ person: ProfileData }> = ({ person }) => (
  <Card>
    <PersonCard>
      <PersonImage
        src={`https://wfkq0nguanh0273r.public.blob.vercel-storage.com/mentorbridge-pics/${person.id}.${person.picture}`}
        alt={person.name}
      />
      <InfoContainer href={"/" + person.id}>
        <Name>{person.name}</Name>
        <Role>{person.role}</Role>
      </InfoContainer>
    </PersonCard>
  </Card>
);

export const StudentsList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");

  const sortedProfiles = [...ProfilesList].sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  const filteredData = sortedProfiles.filter((person) => {
    const matchesSearch = person.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRole =
      !filterRole ||
      person.role.toLowerCase().includes(filterRole.toLowerCase());
    return matchesSearch && matchesRole;
  });

  return (
    <>
      <Header>
        <Subtitle>Students participating in the program</Subtitle>
      </Header>
      <SearchContainer>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1rem",
            flexDirection: isDesktop ? "row" : "column",
          }}
        >
          <SearchInput
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FilterSelect
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="">All Roles</option>
            <option value="Analyst">Technical Analyst</option>
            <option value="UX">UI/UX Designer</option>
            <option value="Frontend">Frontend Dev Engineer</option>
            <option value="Backend">Backend Dev Engineer</option>
            <option value="mobile">Mobile App Developer</option>
          </FilterSelect>
        </div>
      </SearchContainer>
      <List>
        {filteredData.map((person) => (
          <PersonItem key={person.id} person={person} />
        ))}
      </List>
    </>
  );
};
