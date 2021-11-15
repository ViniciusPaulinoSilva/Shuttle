import styled from "styled-components";


export const HeaderDiv = styled.div`
  height: 72px;
  width: 100%;
  align-items: center;
  border-bottom: 1px solid #A6A39F;
  display: flex;
  flex-direction: row;
`;

export const Version = styled.div`
  padding-left: 20px;
`

export const VersionText = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-style: normal;
  font-weight: 800;
  font-size: 17.5px;
`;

export const WalletName = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-style: normal;
  font-size: 14px;
  text-align: left;
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

export const BackArrow = styled.div`
  margin-right: auto;
  margin-left: 10px;
  border-radius: 4px;
  width: 40px;
  height: 40px;
  padding: 12px 10px;
  color: ${(props) => props.theme.colors.textTertiary};
  background-color: ${(props) => props.theme.colors.backgroundQuinary};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
`;