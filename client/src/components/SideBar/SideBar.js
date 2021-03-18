import React from 'react';

import { SideBarWrapper, MobileMenu, MobileItem } from './styledSidebar';
import { UserImage, UserName, Button } from 'components/NavBar/styledNavbar';
const SideBar = ({ open, image, userName, logout }) => {
  return (
    <SideBarWrapper open={open}>
      <MobileMenu>
        <MobileItem>
          <UserImage src={image} />
        </MobileItem>
        <MobileItem>
          <UserName>{userName}</UserName>
        </MobileItem>
        <MobileItem>
          <Button onClick={() => logout()}>Logout</Button>
        </MobileItem>
      </MobileMenu>
    </SideBarWrapper>
  );
};

export default SideBar;
