import React, {useEffect} from "react";
import * as S from "./home.styled";
import LunaLogo from "../../assets/icons/coins/ic_luna_logo.svg";
import AssetCard from "../../components/assetCard/assetCard";
import { useUtils } from "../../hook/utils";


const Home: React.FC = () => {
  const {setShowHeader} = useUtils()
  
  useEffect(() => {
    setShowHeader(true);
  }, [setShowHeader])

  const assets = [
    {
      logo: LunaLogo,
      name: "TERRA Luna",
      quantity: "888",
      value: "9.999,99",
      variation: "50,00",
    },
    {
      logo: LunaLogo,
      name: "TERRA UST",
      quantity: "888",
      value: "4.000,00",
      variation: "0,01",
    },
  ];

  return (
    <S.Container>
      <S.WalletResume>
        <S.ValueTotal>$45.000.000,00</S.ValueTotal>
        <S.ValueVariationDiv>
          <S.ValueVariation>+ 15,00%</S.ValueVariation>
        </S.ValueVariationDiv>
      </S.WalletResume>
      <S.AssetsDiv>
        {assets.map((asset) => (
          <AssetCard assetInfos={asset} key={asset.name}/>
        ))}
      </S.AssetsDiv>
    </S.Container>
  );
};

export default Home;
