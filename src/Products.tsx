import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { Product, productsList } from "./ProductsList";

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

const Container = styled.div``;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  animation: ${fadeIn} 0.5s ease-out;
`;

export const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #000;
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2d3436;
  background: linear-gradient(45deg, #2d3436, #636e72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ProductCard = styled.div`
  background: rgba(255, 255, 255, 0.9);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.5s ease-out;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
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

const ProductLogo = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: contain;
  border: 4px solid #fff;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );

  transition: all 0.3s ease;
  text-align: center;

  &:hover {
    animation: ${pulse} 1s infinite;
  }
`;

const ProductName = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-top: 1rem;
  color: #2d3436;
  background: linear-gradient(45deg, #2d3436, #636e72);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #a8b2d1;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const WebsiteLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #d53f8c;
  text-decoration: none;
  font-size: 0.9rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background: rgba(213, 63, 140, 0.1);
  border: 1px solid rgba(213, 63, 140, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(213, 63, 140, 0.2);
    transform: translateY(-2px);
  }

  &::after {
    content: "→";
    font-size: 1rem;
  }
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

const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
  const navigation = useNavigate();
  const openProduct = () => {
    navigation("/products/" + product.id);
  };

  return (
    <ProductCard onClick={openProduct}>
      <ProductLogo src={product.logo} alt={`${product.name} logo`} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.shortDescription}</ProductDescription>
      <WebsiteLink
        href={product.website}
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </WebsiteLink>
    </ProductCard>
  );
};

export const Products: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = productsList.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header>
        <Subtitle>
          Discover our innovative solutions designed to make your life easier
          and more productive.
        </Subtitle>
      </Header>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </SearchContainer>
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductGrid>
    </Container>
  );
};
