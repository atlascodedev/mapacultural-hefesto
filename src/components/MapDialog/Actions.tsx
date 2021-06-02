import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

export interface IMapDialogActions {
  approveAction: (...args: any[]) => void;
  refuseAction: (...args: any[]) => void;
}

const Root = styled.div`
  width: 100%;
  display: flex;
  padding: 25px;
  gap: 60px;
  justify-content: center;
  border-bottom: 1px #e6e6e6 solid;
`;

const MapDialogActions = ({
  approveAction,
  refuseAction,
}: IMapDialogActions) => {
  return (
    <Root>
      <Button onClick={approveAction} variant="contained" color="primary">
        Aprovar
      </Button>
      <Button onClick={refuseAction} variant="outlined" color="primary">
        Reprovar
      </Button>
    </Root>
  );
};

export default MapDialogActions;
