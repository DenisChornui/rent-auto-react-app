import {
  ButtonHome,
  ContainerHome,
  StyledLink,
  Subtitle,
  Title,
} from 'components/MainComponent/MainComponent.styled';
import React from 'react';

export default function HomePage() {
  return (
    <>
      <ContainerHome>
        <Title>Rent Your Dream Car</Title>
        <Subtitle>
          Explore our wide range of rental cars for your next adventure
        </Subtitle>
        <StyledLink to="/catalog">
          <ButtonHome>Explore Catalog</ButtonHome>
        </StyledLink>
      </ContainerHome>
    </>
  );
}
