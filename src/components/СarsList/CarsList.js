import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from 'redux/cars/operations';
import { selectCars, selectVisibleCars } from 'redux/cars/selectors';
import {
  ButtonLearnMore,
  CarAboutContainer,
  ContainerAbout,
  ContainerAllCard,
  ContainerCard,
  ContainerImg,
  ContainerInfo,
  IteamAbout,
  ListAbout,
  Span,
  SpanModel,
  Title,
} from './CarsList.styled';

export const CarsList = () => {
  const carsFilter = useSelector(selectCars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      <ContainerAllCard>
        {carsFilter.map(car => {
          const {
            id,
            make,
            img,
            model,
            year,
            address,
            rentalCompany,
            type,
            mileage,
            rentalPrice,
            functionalities,
          } = car;
          const addressSplit = address.split(', ');
          return (
            <ContainerCard key={id}>
              <ContainerImg src={img} alt={make} />
              <ContainerInfo>
                <Title>
                  {make} <SpanModel>{model}</SpanModel>, {year}
                </Title>
                <Title>{rentalPrice}</Title>
              </ContainerInfo>
              <CarAboutContainer>
                <ContainerAbout>
                  <IteamAbout>
                    <ListAbout>
                      {addressSplit[1]}
                      <Span />
                    </ListAbout>
                    <ListAbout>
                      {addressSplit[2]}
                      <Span />
                    </ListAbout>
                    <ListAbout>{rentalCompany}</ListAbout>
                  </IteamAbout>
                  <IteamAbout>
                    <ListAbout>
                      {type}
                      <Span />
                    </ListAbout>
                    <ListAbout>
                      {model}
                      <Span />
                    </ListAbout>
                    <ListAbout>
                      {mileage}
                      <Span />
                    </ListAbout>
                    <ListAbout>{functionalities[0]}</ListAbout>
                  </IteamAbout>
                </ContainerAbout>
              </CarAboutContainer>
              <ButtonLearnMore>Learn More</ButtonLearnMore>
            </ContainerCard>
          );
        })}
      </ContainerAllCard>
    </div>
  );
};
