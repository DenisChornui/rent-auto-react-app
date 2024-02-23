import { useContext } from 'react';
import { MainContext } from 'components/Helpers/Context';

import {
  ButtonLearnMore,
  CarAboutContainer,
  ContainerAbout,
  ContainerCard,
  ContainerImg,
  ContainerInfo,
  IteamAbout,
  ListAbout,
  Span,
  SpanModel,
  Title,
} from './CarsList.styled';

export const CarsList = ({ carDetails }) => {
  const { setIsOpen, setCarData } = useContext(MainContext);
  const handlerModalOpen = () => {
    setCarData(carDetails);
    setIsOpen(true);
  };
  const addressSplit = carDetails?.address.split(', ');

  return (
    <ContainerCard>
      <ContainerImg src={carDetails.img} alt={carDetails.make} />
      <ContainerInfo>
        <Title>
          {carDetails.make} <SpanModel>{carDetails.model}</SpanModel>, {carDetails.year}
        </Title>
        <Title>{carDetails.rentalPrice}</Title>
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
            <ListAbout>{carDetails.rentalCompany}</ListAbout>
          </IteamAbout>
          <IteamAbout>
            <ListAbout>
              {carDetails.type}
              <Span />
            </ListAbout>
            <ListAbout>
              {carDetails.model}
              <Span />
            </ListAbout>
            <ListAbout>
              {carDetails.mileage}
              <Span />
            </ListAbout>
            <ListAbout>{carDetails.functionalities[0]}</ListAbout>
          </IteamAbout>
        </ContainerAbout>
      </CarAboutContainer>
      <ButtonLearnMore onClick={handlerModalOpen}>Learn More</ButtonLearnMore>
    </ContainerCard>
  );
};
