import React from 'react';
import {
  Container,
  ContainerInfo,
  Img,
  IteamAbout,
  ItemsAccessories,
  ItemsCondition,
  Link,
  ListAbout,
  ListAccessories,
  ListCondition,
  Span,
  Text,
  TextBlue,
  TextBlueFont,
  Title,
  TitleInfo,
} from './CarDetailsInfo.styled';

export const CarDetailsInfo = ({ carAllInfo }) => {
  const addressSplit = carAllInfo?.address.split(', ');
  const conditions = carAllInfo?.rentalConditions.split('\n');
  const parts = conditions[0].split(':');
  const minAge = parseInt(parts[1], 10);
  const validDriver = conditions[1];
  const security = conditions[2];

  let mileage = carAllInfo.mileage;
  mileage = mileage.toString();
  const formattedMileage = mileage.replace(/^(\d)(\d*)$/, '$1,$2');

  const rentalPrice = carAllInfo.rentalPrice;
  const priceWithoutDollar = rentalPrice.slice(1);
  const newRentalPrice = priceWithoutDollar + '$';

  return (
    <Container>
      <Img src={carAllInfo.img} alt={carAllInfo.make} />

      <Title>
        {carAllInfo.make} <TextBlue>{carAllInfo.model}</TextBlue>,{' '}
        {carAllInfo.year}
      </Title>
      <IteamAbout>
        <ListAbout>
          {addressSplit[1]} <Span />
        </ListAbout>
        <ListAbout>
          {addressSplit[2]} <Span />
        </ListAbout>
        <ListAbout>
          Id: {carAllInfo.id} <Span />
        </ListAbout>
        <ListAbout>
          Year: {carAllInfo.year} <Span />
        </ListAbout>
        <ListAbout>
          Type: {carAllInfo.type} <Span />
        </ListAbout>
        <ListAbout>
          Fuel Consumption: {carAllInfo.fuelConsumption} <Span />
        </ListAbout>
        <ListAbout>Engine Size: {carAllInfo.engineSize}</ListAbout>
      </IteamAbout>
      <Text>{carAllInfo.description}</Text>
      <ContainerInfo>
        <TitleInfo>Accessories and functionalities:</TitleInfo>
        <ItemsAccessories>
          {carAllInfo?.accessories?.map((i, index) => (
            <ListAccessories key={i}>
              {i}
              {index !== carAllInfo.accessories.length - 1 && <Span />}
            </ListAccessories>
          ))}
        </ItemsAccessories>
        <ItemsAccessories>
          {carAllInfo?.functionalities?.map((i, index) => (
            <ListAccessories key={i}>
              {i}
              {index !== carAllInfo.accessories.length - 1 && <Span />}
            </ListAccessories>
          ))}
        </ItemsAccessories>
      </ContainerInfo>
      <ContainerInfo>
        <p>Rental Conditions:</p>
        <ItemsCondition>
          <ListCondition>
            Minimum age: <TextBlueFont>{minAge}</TextBlueFont>
          </ListCondition>
          <ListCondition>{validDriver}</ListCondition>
          <ListCondition>{security}</ListCondition>
          <ListCondition>
            Mileage: <TextBlueFont>{formattedMileage}</TextBlueFont>
          </ListCondition>
          <ListCondition>
            Price: <TextBlueFont>{newRentalPrice}</TextBlueFont>
          </ListCondition>
        </ItemsCondition>
      </ContainerInfo>
      <Link href="tel:+380730000000">Rental car</Link>
    </Container>
  );
};
