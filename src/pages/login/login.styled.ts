import styled from "styled-components";

interface Active {
  active: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 85%;
`;

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

export const AssetLogo = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-top: 40px;
`;

export const PasswordText = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  letter-spacing: -0.03em;
`

export const Input = styled.input`
  margin-top: 20px;
  width: 320px;
  height: 56px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  border-radius: 8px;
  box-shadow: inset 5px 9px 7px -5px rgba(0,0,0,0.27);
  border-width: 0px;
`;

export const LoginButton = styled.div<Active>`
  width: 320px;
  height: 56px;
  justify-content: center;
  background: ${(props) => props.active ? props.theme.colors.primary : '#C6C1BD'};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin-top: 45px;
  margin-left: 20px;
`;

export const LoginButtonText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  padding-top: 15px;
`;