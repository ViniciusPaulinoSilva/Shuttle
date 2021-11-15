import React from "react";
import * as S from "./headerLoggedOut.style";
import {HiMenuAlt4} from "react-icons/hi";
 import {FiArrowLeft} from 'react-icons/fi'


export type HeaderLoggedOut  = {
    leftIcon?: boolean,
    rightIcon?: boolean,
    version?: boolean,
    leftIconClick?: () => void;
    rightIconClick?: () => void;

}

const Header: React.FC<HeaderLoggedOut> = ({version, leftIcon, rightIcon, leftIconClick, rightIconClick}: HeaderLoggedOut) => {

  return (
    <S.HeaderDiv> 
        {leftIcon && (
            <S.BackArrow
                onClick={leftIconClick}
            >
                <FiArrowLeft/>
            </S.BackArrow>
        )}
        {version && (
            <S.Version>
                <S.VersionText>SHUTTLE</S.VersionText>
                <S.WalletName>Ver.0.0.1</S.WalletName>       
            </S.Version>
        )}
        {rightIcon && (
            <S.Options
                onClick={rightIconClick}
            >
                <HiMenuAlt4 />
            </S.Options>
        )}
</S.HeaderDiv>
  );
};

export default Header;
