import styled from 'styled-components';

export const Container = styled.div`
  width: 461px;
`;

export const Img = styled.img`
  width: 100%;
  height: 248px;
  margin-bottom: 14px;
  border-radius: 14px;
`;

export const TextBlue = styled.span`
  color: rgb(52, 112, 255);
`;

export const Title = styled.p`
  margin-bottom: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  text-align: left;
`;

export const TextBlueFont = styled.span`
  color: rgb(52, 112, 255);
  font-weight: 600;
`;

export const Span = styled.span`
  height: 16px;
  margin-left: 6px;
  margin-right: 6px;
  border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const IteamAbout = styled.ul`
  display: flex;
  flex-wrap: wrap;
  row-gap: 4px;
  width: 300px;
  margin: 0 0 14px 0;
  padding: 0;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  list-style: none;
`;

export const ListAbout = styled.li`
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  width: 100%;
  margin-bottom: 24px;
  text-align: left;
  color: rgb(18, 20, 23);
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

export const ContainerInfo = styled.div`
  width: 100%;
  margin-bottom: 24px;
`;

export const TitleInfo = styled.p`
  width: 100%;
  padding: 0;
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

export const ItemsAccessories = styled.ul`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  margin-bottom: 8px;

  &:last-child {
    margin: 0;
  }
`;

export const ListAccessories = styled.li`
  display: flex;
  color: rgba(18, 20, 23, 0.5);
  align-items: center;
  font-size: 12px;
`;

export const ItemsCondition = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 90%;
`;

export const ListCondition = styled.li`
  width: fit-content;
  height: 32px;
  padding: 7px 14px 7px 14px;
  border-radius: 35px;
  background-color: rgb(249, 249, 249);
  color: rgb(54, 53, 53);
  font-size: 12px;
`;

export const Link = styled.a`
  width: 168px;
  height: 44px;
  right: 333px;
  bottom: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 50px 12px 50px;
  border-radius: 12px;
  background-color: rgb(52, 112, 255);
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  color: rgb(255, 255, 255);
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;
