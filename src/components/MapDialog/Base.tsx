import React from "react";
import styled from "styled-components";

export interface IMapDialogBase {
  children: React.ReactNode;
}

const Root = styled.div`
  width: 90%;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  height: 90%;
  border-radius: 8px;
  overflow-y: scroll;
  z-index: 5000;

  /* Make the container acts as the viewport to allow for fixed child relative to parent */
  transform: translateZ(0);

  @media (min-width: 1024px) {
    width: 60%;
    height: 85%;
  }
`;

const MapDialogBase = ({ children }: IMapDialogBase) => {
  return <Root>{children}</Root>;
};

export default MapDialogBase;
