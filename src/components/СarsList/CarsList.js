import { useContext } from 'react';
import { MainContext } from 'components/Helpers/Context';

import {
  ButtonLearnMore,
  CarAboutContainer,
  ContainerAbout,
  ContainerCard,
  ContainerImg,
  ContainerInfo,
  FavoriteButton,
  IteamAbout,
  ListAbout,
  Span,
  SpanModel,
  SvgStyled,
  Title,
} from './CarsList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from 'redux/favorite/favoriteSlice';
import { favoriteCars } from 'redux/favorite/selectors';

export const CarsList = ({ carDetails }) => {
  const { setIsOpen, setCarData } = useContext(MainContext);
  const handlerModalOpen = () => {
    setCarData(carDetails);
    setIsOpen(true);
  };
  const dispatch = useDispatch();
  const addressSplit = carDetails?.address.split(', ');
  const favoriteImages = useSelector(favoriteCars);

  const isFavorite = favoriteImages.some(favorite => favorite.id === carDetails.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(carDetails));
    } else {
      dispatch(addFavorite(carDetails));
    }
  };

  return (
    <ContainerCard>
      <FavoriteButton onClick={handleToggleFavorite} isFavorite={isFavorite}> 
        <SvgStyled name='icon-heart'/>
      </FavoriteButton>
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
