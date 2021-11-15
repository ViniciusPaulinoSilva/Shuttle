import React from "react";
import { useHistory } from "react-router";
import * as S from "./feedback.styled";
import Logo from '../../assets/icons/logo.svg'


import HeaderLoggedOut from '../../components/headerLoggedOut/headerLoggedOut'


const Feedback: React.FC = () => {
    const history = useHistory();    

  return (
    <S.Container>
        <HeaderLoggedOut
            leftIcon
            leftIconClick={() => history.goBack()}
        />
        <S.AssetLogo src={Logo}/>
        
        <S.Version>
            <S.VersionText>SHUTTLE</S.VersionText>
            <S.WalletName>Ver.0.0.1</S.WalletName>       
        </S.Version>
        <S.FeedbackButton>
            <S.FeedbackText>
                Send us feedback
            </S.FeedbackText>
        </S.FeedbackButton>
    </S.Container>
  );
};

export default Feedback;
