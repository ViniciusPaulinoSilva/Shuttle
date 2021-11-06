import React from "react";
import * as S from "./home.styled";

const Home: React.FC = () => {
  return (
    <S.Container>
      <S.WalletResume>
        <S.ValueTotal>$45.000.000,00</S.ValueTotal>
        <S.ValueVariationDiv>
          <S.ValueVariation>+ 15,00%</S.ValueVariation>
        </S.ValueVariationDiv>
      </S.WalletResume>
    </S.Container>
  );
};

export default Home;
