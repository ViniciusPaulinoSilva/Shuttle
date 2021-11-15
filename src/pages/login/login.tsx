import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import * as S from "./login.styled";
import HeaderLoggedOut from '../../components/headerLoggedOut/headerLoggedOut'
import Logo from '../../assets/icons/logo.svg'


const Login: React.FC = () => {
    const history = useHistory();    
    const [active, setActive] = useState(false)
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(password.length >= 5) {
            setActive(true)
        }else{
            setActive(false)
        }
    }, [password])

  return (
    <S.Container>
        <HeaderLoggedOut
            version
            rightIcon
            rightIconClick={() => history.push('/feedback')}
        />
        <S.AssetLogo src={Logo}/>
        <S.PasswordText>
            Please insert the passcode
        </S.PasswordText>
        <S.PasswordText>
            to unlock the deck
        </S.PasswordText>
        <S.Input 
            type="password" 
            name="password" 
            placeholder="Passcode"  
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
        />
        <S.LoginButton
            onClick={() => history.push('/home')}
            active={active}
        >
        <S.LoginButtonText>
            Unlock
        </S.LoginButtonText>
        </S.LoginButton>
    </S.Container>
  );
};

export default Login;
