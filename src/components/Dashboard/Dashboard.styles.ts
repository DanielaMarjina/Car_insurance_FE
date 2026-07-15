import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: 700;
`;

export const StatisticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

export const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;