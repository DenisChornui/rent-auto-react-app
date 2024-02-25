import { CarDetailsInfo } from 'components/CarDetailsInfo/CarDetailsInfo';
import { MainContext } from 'components/Helpers/Context';
import {
  ButtonLoadMore,
  Container,
  ContainerAllCard,
} from 'components/MainComponent/MainComponent.styled';
import ModalWindow from 'components/Modal/Modal';
import { CarsList } from 'components/СarsList/CarsList';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { favoriteCars } from 'redux/favorite/selectors';

export default function FavoritePage() {
  const favoriteImages = useSelector(favoriteCars);
  const { isOpen, setIsOpen, carData } = useContext(MainContext);

  return (
    <>
      <Container>
        <ContainerAllCard>
          {favoriteImages.map((item, i) => (
            <CarsList key={i} carDetails={item} />
          ))}
        </ContainerAllCard>
        <ButtonLoadMore type="button">Load more</ButtonLoadMore>
      </Container>
      <ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <CarDetailsInfo carAllInfo={carData} />
      </ModalWindow>
    </>
  );
}
