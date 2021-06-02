import React from "react";
import styled from "styled-components";

export interface IMapDialogContent {}

const Root = styled.div`
  width: 100%;
  padding: 30px;
  display: flex;
  height: 100%;
  overflow-y: scroll;
`;

const MapDialogContent: React.FC<IMapDialogContent> = ({ children }) => {
  return <Root>{children}</Root>;
};

export default MapDialogContent;
