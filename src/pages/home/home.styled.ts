import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85%;
`;

export const WalletResume = styled.div`
  display: flex;
  flex-direction: column;
  height: 150px;
  background: ${(props) => props.theme.colors.positive};
`;

export const ValueTotal = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-style: normal;
  font-weight: normal;
  font-size: 40px;
  padding-top: 10px;
`;

export const ValueVariation = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
`;

export const ValueVariationDiv = styled.div`
  width: 62px;
  height: 23px;
  border: 1px solid ${(props) => props.theme.colors.backgroundTertiary};
  box-sizing: border-box;
  border-radius: 4px;
  align-self: center;
`;

export const AssetsDiv = styled.div`
  padding-left: 25px;
  padding-right: 20px;
  margin-top: 20px;
`;
