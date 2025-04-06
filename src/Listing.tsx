import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Products } from "./Products";
import { StudentsList } from "./StudentsList";
import { About } from "./About";

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

const Container = styled.div`
  max-width: ${isDesktop ? "90%" : "100%"};
  margin: 0 auto;
  padding: ${isDesktop ? "2rem" : "0"};
  margin-bottom: 3rem;
  min-height: 100vh;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
`;

const Tab = styled.button<{ active: boolean }>`
  padding: 0.75rem 1.5rem;
  border: none;
  background: ${(props) => (props.active ? "#D53F8C" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#D53F8C")};
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid
    ${(props) => (props.active ? "#D53F8C" : "rgba(255, 255, 255, 0.1)")};

  &:hover {
    background: ${(props) =>
      props.active ? "#D53F8C" : "rgba(254, 204, 230, 0.2)"};
    color: ${(props) => (props.active ? "#fff" : "#D53F8C")};
    transform: translateY(-2px);
    border: 1px solid #d53f8c;
  }
`;

const ContentContainer = styled.div`
  animation: fadeIn 0.5s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Listing: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState<"students" | "products" | "about">(
    "students"
  );

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      setActiveTab(tab as "students" | "products" | "about");
    }
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({ tab: activeTab });
  }, [activeTab, setSearchParams]);

  return (
    <Container>
      <div className="d-flex justify-content-center align-items-center gap-3 mb-5">
        <img
          src="https://ssmiet.ac.in/images/logo.png"
          alt="ssmiet"
          className="logo"
        />
        <img
          src="https://www.mentorbridge.in/_next/static/media/icon-logo-horizontal.2500857b.svg"
          className="logo"
          alt="mentorbridge"
        />
      </div>
      <div className="list">
        <TabContainer>
          <Tab
            active={activeTab === "about"}
            onClick={() => setActiveTab("about")}
          >
            About
          </Tab>
          <Tab
            active={activeTab === "students"}
            onClick={() => setActiveTab("students")}
          >
            Students
          </Tab>
          <Tab
            active={activeTab === "products"}
            onClick={() => setActiveTab("products")}
          >
            Products
          </Tab>
        </TabContainer>

        <ContentContainer>
          {activeTab === "students" && <StudentsList />}
          {activeTab === "products" && <Products />}
          {activeTab === "about" && <About />}
        </ContentContainer>
      </div>
    </Container>
  );
};
