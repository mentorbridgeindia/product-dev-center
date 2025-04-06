import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BreadcrumbContainer = styled.div`
  padding: 1.5rem 2rem;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${fadeIn} 0.5s ease-out;
  display: flex;
  justify-content: space-between;
`;

export const BreadcrumbList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  max-width: 1200px;
  /* margin: 0 auto; */
  justify-content: flex-start;
`;

export const BreadcrumbItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const BreadcrumbLink = styled.a`
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
    color: #d53f8c;
    background: rgba(100, 255, 218, 0.05);
    transform: translateY(-1px);
  }

  &::before {
    content: "⌂";
    font-size: 1rem;
    color: #d53f8c;
  }
`;

export const BreadcrumbSeparator = styled.span`
  color: rgba(255, 255, 255, 0.2);
  font-size: 0.8rem;
  display: flex;
  align-items: center;

  &::after {
    content: "›";
  }
`;

export const BreadcrumbCurrent = styled.span`
  color: #d53f8c;
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
