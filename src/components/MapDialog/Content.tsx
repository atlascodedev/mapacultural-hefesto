import React from "react";
import styled from "styled-components";

export interface IMapDialogContent {}

const Root = styled.div`
  width: 100%;
  padding: 15px;
  display: flex;
  height: 100%;
  justify-content: center;
  overflow-y: scroll;
`;

const Grid = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: 1fr;
  place-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const MapDialogContent: React.FC<IMapDialogContent> = ({ children }) => {
  return (
    <Root>
      <Grid>{children}</Grid>
    </Root>
  );
};

export default MapDialogContent;
