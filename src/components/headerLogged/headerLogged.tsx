import React from "react";
import * as S from "./headerLogged.styled";
import {HiMenuAlt4} from "react-icons/hi";

const HeaderLogged: React.FC = () => {
  return (
    <S.Container>
      <S.WalletDropDown>Wallet1</S.WalletDropDown>
      <S.WalletAddress>terra1x...7jdp</S.WalletAddress>
      <S.Options>
        <HiMenuAlt4 />
      </S.Options>
    </S.Container>
  );
};

export default HeaderLogged;
