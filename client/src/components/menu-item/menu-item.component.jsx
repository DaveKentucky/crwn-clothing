// libraries
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
// styles
import {
  MenuItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  TitleContainer,
  SubtitleContainer
} from './menu-item.styles';


const MenuItem = ( { title, imageUrl, size, linkUrl } ) => {
  let history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer 
      size={ size }
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImageContainer
        className='background-image'
        imageUrl={ imageUrl }
      />
      <ContentContainer>
        <TitleContainer>{title.toUpperCase()}</TitleContainer>
        <SubtitleContainer>SHOP NOW</SubtitleContainer>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;