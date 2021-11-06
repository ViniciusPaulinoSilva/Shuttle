import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 72px;
  background-color: ${(props) => props.theme.colors.backgroundQuaternary};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const WalletDropDown = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 20px;
  border-radius: 4px;
  padding: 10px 10px;
  width: 68px;
  height: 40px;
  color: ${(props) => props.theme.colors.textTertiary};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;

export const WalletAddress = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  margin-left: 20px;
  border-radius: 4px;
  width: 111px;
  height: 40px;
  padding: 7px 10px;
  border: 1px solid ${(props) => props.theme.colors.positive};
  color: ${(props) => props.theme.colors.textTertiary};
`;

export const Options = styled.div`
  margin-left: auto;
  margin-right: 10px;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  padding: 12px 10px;
  color: ${(props) => props.theme.colors.textTertiary};
  background-color: ${(props) => props.theme.colors.backgroundQuinary};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;
