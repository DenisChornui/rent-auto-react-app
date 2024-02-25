import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px 150px 128px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const ContainerAllCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 29px;
  row-gap: 50px;
  margin-right: auto;
  margin-left: auto;
  width: 1185px;
`;

export const ButtonLoadMore = styled.button`
  padding-top: 50px;
  border: none;
  background-color: transparent;
  color: rgb(52, 112, 255);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  cursor: pointer;

  &:hover {
    color: rgb(11, 68, 205);
  }
`;

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  color: #666;
  margin-bottom: 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const ButtonHome = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 99px 12px 99px;
  border-radius: 12px;
  border: none;
  background-color: rgb(52, 112, 255);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;
