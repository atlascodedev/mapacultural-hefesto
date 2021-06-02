import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import AtlasBackdrop from "../Util/AtlasBackdrop";
import MapDialogHeader from "./Header";

export interface IMapDialogActionConfirmation {
  open: boolean;
  closeFn: (...args: any[]) => void;
  submitFn: (...args: any[]) => void;
  title: string;
}

const Root = styled.div`
  width: 95%;
  height: 75%;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 8px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 55%;
    height: 65%;
  }
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ActionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;
  height: 20%;
  border-top: 1px #e6e6e6 solid;
`;

const Inner = styled.div`
  height: 80%;
`;

const MapDialogActionConfirmation: React.FC<IMapDialogActionConfirmation> = ({
  children,
  closeFn,
  submitFn,
  open,
  title,
}) => {
  return (
    <AtlasBackdrop open={open} closeFn={closeFn}>
      <Root>
        <MapDialogHeader title={title} closeFn={closeFn} />
        <Content>
          <Inner>{children}</Inner>
          <ActionContainer>
            <Button onClick={closeFn} variant="outlined" color="primary">
              Cancelar
            </Button>
            <Button onClick={submitFn} variant="contained" color="primary">
              Confirmar
            </Button>
          </ActionContainer>
        </Content>
      </Root>
    </AtlasBackdrop>
  );
};

export default MapDialogActionConfirmation;
