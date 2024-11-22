import React from "react";
import { ReactComponent as LogoImage } from "/src/assets/logo.svg";
import { AppRoute } from "/src/const";
import { Text, StyledLogo, StyledLogoMainPage } from "./styles";
import { useLocation } from "react-router-dom";

// Логотип сайта с названием
function Logo() {
  const { pathname } = useLocation();
  return pathname === AppRoute.MAIN ? (
    <StyledLogoMainPage>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogoMainPage>
  ) : (
    <StyledLogo to={AppRoute.MAIN}>
      <LogoImage />
      <Text>Котокафе</Text>
    </StyledLogo>
  );
}

export default Logo;
