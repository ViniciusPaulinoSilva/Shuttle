import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 85%;
`;

export const Version = styled.div`
`

export const VersionText = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-style: normal;
  font-weight: 800;
  font-size: 17.5px;
  text-align: center;
`;

export const WalletName = styled.p`
  color: ${(props) => props.theme.colors.textPrimary};
  font-style: normal;
  font-size: 14px;
  text-align: center;
`;

export const AssetLogo = styled.img`
  width: 100px;
  height: 100px;
  align-self: center;
  margin-top: 60px;
`;

export const FeedbackButton  = styled.div`
    width: 128px;
    height: 40px;
    background: #2C2B29;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin-top: 50px;
    margin-left: 116px;
`;

export const FeedbackText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    color: ${(props) => props.theme.colors.textTertiary};
    padding-top: 8px;    
`;