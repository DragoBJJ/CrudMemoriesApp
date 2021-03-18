import React, { useState, useEffect } from 'react';
import decode from 'jwt-decode';

import { useLocation, useHistory } from 'react-router-dom';
import { LOGOUT } from 'constants/actonType';
import { useDispatch } from 'react-redux';

import { TiThMenuOutline } from 'react-icons/ti';
import SideBar from 'components/SideBar/SideBar';

import profile from 'assets/images/profile.svg';
import camping from 'assets/images/camping.svg';
import { NavLink } from 'react-router-dom';

import {
  NavWrapper,
  ItemContainer,
  NavHeader,
  NavImage,
  UserName,
  UserImage,
  ButtonWrapper,
  Button,
  MenuIConWrapper,
} from './styledNavbar';

const NavBar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

  const [sideBarOpen, setSideBar] = useState(false);

  const location = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('profile')));
    const token = user?.token;
    if (token) {
      const decodedToken = decode(token);
      const tokenTime = decodedToken.exp * 1000;

      if (tokenTime < new Date().getTime()) logout();
    }
  }, [location]);

  const logout = () => {
    dispatch({ type: LOGOUT });

    setUser(null);
  };

  return (
    <NavWrapper>
      <ItemContainer>
        <NavHeader>Memories</NavHeader>
        <NavImage src={camping} />
      </ItemContainer>

      {user ? (
        <>
          <ItemContainer user>
            <UserName>{user.result.name}</UserName>
            <UserImage src={profile} />
            <Button onClick={() => logout()}>Logout</Button>
          </ItemContainer>
          <MenuIConWrapper onClick={() => setSideBar(!sideBarOpen)}>
            <TiThMenuOutline />
          </MenuIConWrapper>
          <SideBar logout={logout} image={profile} userName={user.result.name} open={sideBarOpen} />
        </>
      ) : (
        <ButtonWrapper>
          <NavLink to="/auth">
            <Button>Sign In</Button>
          </NavLink>
        </ButtonWrapper>
      )}
    </NavWrapper>
  );
};

export default NavBar;
