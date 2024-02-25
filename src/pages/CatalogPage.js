import { MainContext } from 'components/Helpers/Context';
import {
  ButtonLoadMore,
  Container,
  ContainerAllCard,
} from 'components/MainComponent/MainComponent.styled';
import { CarsList } from 'components/СarsList/CarsList';
import ModalWindow from 'components/Modal/Modal';
import React, { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { useCars } from 'components/hooks/useCars';
import { CarDetailsInfo } from 'components/CarDetailsInfo/CarDetailsInfo';
import Filter from 'components/Filter/Filter';


export default function CatalogPage() {
  const { isOpen, setIsOpen, carData } = useContext(MainContext);
  const dispatch = useDispatch();
  const { getAllCars } = useCars();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Filter/>
        <ContainerAllCard>
          {getAllCars.map((item, i) => (
            <CarsList key={i} carDetails={item} />
          ))}
        </ContainerAllCard>
        <ButtonLoadMore type="button">Load more</ButtonLoadMore>
      </Container>
      <ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <CarDetailsInfo carAllInfo={carData}/>
      </ModalWindow>
    </>
  );
}
