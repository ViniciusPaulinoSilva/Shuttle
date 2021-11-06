import React from "react";
import * as S from "./assetCard.styled";

export interface AssetProps {
  assetInfos: models.AssetInfos;
}

const AssetCard: React.FC<AssetProps> = ({assetInfos}) => {
  return (
    <S.Container>
      <S.AssetLogo src={assetInfos.logo} />
      <S.AssetCardLeft>
        <S.AssetInfos>
          <S.AssetName>{assetInfos.name}</S.AssetName>
          <S.AssetValue>${assetInfos.value}</S.AssetValue>
        </S.AssetInfos>
        <S.LowerAssetInfos>
          <S.AssetQuantity>{assetInfos.quantity}</S.AssetQuantity>
          <S.AssetVariation>+{assetInfos.variation}%</S.AssetVariation>
        </S.LowerAssetInfos>
      </S.AssetCardLeft>
    </S.Container>
  );
};

export default AssetCard;
