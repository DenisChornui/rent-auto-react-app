import { MainContext } from 'components/Helpers/Context';
import {
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

export default function CatalogPage() {
  const { isOpen, setIsOpen, carData, setCarData } = useContext(MainContext);
  const dispatch = useDispatch();
  const { getAllCars } = useCars();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <Container>
        <ContainerAllCard>
          {getAllCars.map((item, i) => (
            <CarsList key={i} carDetails={item} />
          ))}
        </ContainerAllCard>
        <button type="button">Load more</button>
      </Container>
      <ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <CarDetailsInfo carAllInfo={carData}/>
      </ModalWindow>
    </>
  );
}
