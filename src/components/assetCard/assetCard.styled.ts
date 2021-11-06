import styled from "styled-components";

export const Container = styled.div`
  width: 320px;
  height: 72px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  margin-top: 5px;
`;

export const AssetLogo = styled.img`
  width: 40px;
  height: 40px;
  align-self: center;
  background: #2c2b29;
  border-radius: 83.3333px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const AssetCardLeft = styled.div`
  align-content: center;
  width: 95%;
  height: 100%;
  padding-top: 10px;
  padding-right: 10px;
`;

export const AssetInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  padding-top: 10px;
`;

export const AssetName = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  text-align: left;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const AssetQuantity = styled.p`
  text-align: right;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const LowerAssetInfos = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 5px;
`;

export const AssetValue = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${(props) => props.theme.colors.textPrimary};
`;

export const AssetVariation = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  color: ${(props) => props.theme.colors.positive};
`;
