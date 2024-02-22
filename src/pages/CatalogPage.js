import {
  Container,
  ContainerCard,
} from 'components/MainComponent/MainComponent.styled';
import { CarsList } from 'components/СarsList/CarsList';
import React from 'react';

export default function CatalogPage() {
  return (
    <Container>
        <CarsList />
    </Container>
  );
}
