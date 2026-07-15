import styled from "styled-components";


export const Card = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);

  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  flex: 1;
`;
export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #eee;
`;

export const Label = styled.span`
  color: #555;
`;

export const Value = styled.span`
  font-weight: 700;
`;

export const IconWrapper = styled.div`
  width: 42px;
  height: 42px;

  border-radius: 12px;

  background: #eef2ff;

  color: #4f46e5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Footer = styled.div`
  margin-top: 20px;
  padding-top: 16px;

  border-top: 1px solid #e5e7eb;

  text-align: center;

  color: #2563eb;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    color: #1d4ed8;
  }
`;

export const Subtitle = styled.p`
  margin: 4px 0 0;
  color: #6b7280;
  font-size: 14px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;