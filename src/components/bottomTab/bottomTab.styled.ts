import styled from "styled-components";

export const OuterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const InnerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  height: 66px;
  align-self: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NavigationContainer = styled.div`
  justify-items: center;
`;

export const ContainerSpan = styled.div`
  padding-top: 22px;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: ${(props) => props.theme.fontSize.label};
`;
