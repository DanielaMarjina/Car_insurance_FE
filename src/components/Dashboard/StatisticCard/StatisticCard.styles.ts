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

export const Value = styled.h2`
  margin: 0;

  font-size: 34px;

  font-weight: bold;
`;

export const IconWrapper = styled.div`
  color: #4F46E5;
`;