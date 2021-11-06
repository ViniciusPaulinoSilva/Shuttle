import React from "react";
import * as S from "./bottomTab.styled";

const BottomTab: React.FC = () => {
  return (
    <S.OuterContainer>
      <S.InnerContainer>
        <S.NavigationContainer onClick={() => console.log("CLIQUEI AQUI ")}>
          <S.ContainerSpan>Wallet</S.ContainerSpan>
        </S.NavigationContainer>
        <S.NavigationContainer onClick={() => console.log("CLIQUEI AQUI ")}>
          <S.ContainerSpan>Swap</S.ContainerSpan>
        </S.NavigationContainer>
        <S.NavigationContainer onClick={() => console.log("CLIQUEI AQUI ")}>
          <S.ContainerSpan>Gallery</S.ContainerSpan>
        </S.NavigationContainer>
        <S.NavigationContainer onClick={() => console.log("CLIQUEI AQUI ")}>
          <S.ContainerSpan>History</S.ContainerSpan>
        </S.NavigationContainer>
        <S.NavigationContainer onClick={() => console.log("CLIQUEI AQUI ")}>
          <S.ContainerSpan>Settings</S.ContainerSpan>
        </S.NavigationContainer>
      </S.InnerContainer>
    </S.OuterContainer>
  );
};

export default BottomTab;
