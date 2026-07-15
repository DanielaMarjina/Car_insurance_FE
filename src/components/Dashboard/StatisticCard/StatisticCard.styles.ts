import styled from "styled-components";

export const Card = styled.div`
  background: white;

  border-radius: 14px;

  padding: 24px;

  box-shadow: 0 2px 8px rgba(0,0,0,.08);

  display: flex;
  flex-direction: column;

  gap: 18px;
`;

export const Header = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;
`;

export const Title = styled.h3`
  margin: 0;

  font-size: 15px;

  font-weight: 600;

  color: #666;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Footer = styled.div`
  margin-top: 16px;
  color: #2563eb;
  font-size: 14px;
  font-weight: 600;
`;

export const Value = styled.h2`
  margin: 0;

  font-size: 34px;

  font-weight: bold;
`;

export const IconWrapper = styled.div`
  color: #4F46E5;
`;

export const IconContainer = styled.div`
    width:56px;
    height:56px;

    border-radius:16px;

    display:flex;

    align-items:center;

    justify-content:center;

    background:#EEF4FF;
`;