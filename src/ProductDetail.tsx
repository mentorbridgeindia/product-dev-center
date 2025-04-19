import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import {
  BreadcrumbCurrentProduct,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./BreadCrumbs";
import { productsList } from "./ProductsList";

const isDesktop = window.innerWidth > 1200;

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

const BreadcrumbContainer = styled.div`
  /* padding: 1.5rem 2rem; */
  margin-bottom: 1rem;
  /* background: rgba(255, 255, 255, 0.02); */
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.05); */
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-direction: ${isDesktop ? "row" : "column"};
  gap: 1rem;
`;

interface ProductDetailEntity {
  id: string;
  name: string;
  logo: string;
  website: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
}

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.5s ease-out;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ProductLogo = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
  /* filter: brightness(0) invert(1); */
  opacity: 0.9;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;

const TitleContainer = styled.div`
  flex: 1;
`;

const ProductName = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(45deg, #fff, #a8b2d1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const ShortDescription = styled.p`
  font-size: 1.2rem;
  color: #a8b2d1;
  margin-bottom: 1.5rem;
`;

const WebsiteLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #d53f8c;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  background: rgba(254, 204, 230, 0.1);
  border: 1px solid rgba(254, 204, 230, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(254, 204, 230, 0.2);
    transform: translateY(-2px);
  }

  &::after {
    content: "→";
    font-size: 1rem;
  }
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: #fff;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
`;

const LongDescription = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #a8b2d1;

  p {
    margin-bottom: 1.5rem;
  }

  a {
    color: #d53f8c;
    text-decoration: none;
    border-bottom: 1px solid #fecce6;
    transition: all 0.3s ease;

    &:hover {
      border-bottom-color: #d53f8c;
    }
  }
`;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.5s ease-out;
`;

const CarouselImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
`;

const CarouselControls = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 1rem;
  z-index: 10;
`;

const CarouselButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #d53f8c;
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const CarouselDots = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 10;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? "#D53F8C" : "rgba(255, 255, 255, 0.3)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

const NavContainer = styled.nav`
  position: sticky;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 2rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 2rem;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  z-index: 100;
`;

const NavList = styled.ul`
  list-style: none !important;
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  list-style: none !important;
  margin: 0;

  &::before {
    content: "" !important;
  }
`;

const NavLink = styled.a<{ active: boolean }>`
  color: ${(props) => (props.active ? "#D53F8C" : "#fff")};
  list-style: none !important;
  text-decoration: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) =>
    props.active ? "rgba(100, 255, 218, 0.1)" : "transparent"};
  border: 1px solid
    ${(props) =>
      props.active ? "rgba(100, 255, 218, 0.2)" : "rgba(255, 255, 255, 0.05)"};

  &:hover {
    color: #d53f8c;
    background: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
  }

  &::before {
    content: "▹";
    font-size: 0.8rem;
    color: ${(props) =>
      props.active ? "#D53F8C" : "rgba(255, 255, 255, 0.3)"};
  }
`;

const Section = styled.section`
  scroll-margin-top: 6rem;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #16213e;
  color: #d53f8c;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a1a2e;
  }

  &::before {
    margin-right: 0.5rem;
  }
`;

export const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = productsList.find((product) => product.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("head");

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      const sections = ["head", "overview", "description"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!product) return null;

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === product?.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? product?.images.length - 1 : prev - 1
    );
  };

  return (
    <Container>
      <NavContainer>
        {/* <BackButton onClick={goBack}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 19L5 12L12 5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </BackButton> */}
        <BreadcrumbContainer>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/?tab=products">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbCurrentProduct>
                {product.name}
              </BreadcrumbCurrentProduct>
            </BreadcrumbItem>
          </BreadcrumbList>
          {/* <NavList> */}
          {/* <NavItem>
              <NavLink
                href="#head"
                active={activeSection === "head"}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("head");
                }}
              >
                Head
              </NavLink>
            </NavItem> */}
          {/* <NavItem>
              <NavLink
                href="#overview"
                active={activeSection === "overview"}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("overview");
                }}
              >
                Overview
              </NavLink>
            </NavItem> */}
          {/* <NavItem>
              <NavLink
                href="#description"
                active={activeSection === "description"}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("description");
                }}
              >
                Detailed Description
              </NavLink>
            </NavItem> */}
          {/* <NavItem>
              <NavLink
                href="#gallery"
                active={activeSection === "gallery"}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("gallery");
                }}
              >
                Gallery
              </NavLink>
            </NavItem> */}
          {/* </NavList> */}
        </BreadcrumbContainer>
      </NavContainer>

      <Section id="head">
        <Header>
          <ProductLogo src={product.logo} alt={`${product.name} logo`} />
          <TitleContainer>
            <ProductName>{product.name}</ProductName>
            <ShortDescription>{product.shortDescription}</ShortDescription>
            <WebsiteLink
              href={product.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </WebsiteLink>
          </TitleContainer>
        </Header>
      </Section>

      <Section id="overview">
        <ContentSection>
          <SectionTitle>Product Overview</SectionTitle>
          <LongDescription
            dangerouslySetInnerHTML={{ __html: product.longDescription }}
          />
        </ContentSection>
      </Section>

      {/* <Section id="gallery">
        <ContentSection>
          <SectionTitle>Gallery</SectionTitle>
           <CarouselContainer>
            <CarouselImage
              src={product.images[currentImageIndex]}
              alt={`${product.name} - Image ${currentImageIndex + 1}`}
            />
            <CarouselControls>
              <CarouselButton
                onClick={prevImage}
                disabled={currentImageIndex === 0}
              >
                ←
              </CarouselButton>
              <CarouselButton
                onClick={nextImage}
                disabled={currentImageIndex === product.images.length - 1}
              >
                →
              </CarouselButton>
            </CarouselControls>
            <CarouselDots>
              {product.images.map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentImageIndex}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </CarouselDots>
          </CarouselContainer>
        </ContentSection>
      </Section> */}
    </Container>
  );
};
