import React from "react";
import styled from "styled-components";
import AtlasBackdrop from "../Util/AtlasBackdrop";

export interface IMapDialogActionConfirmation {
  open: boolean;
  closeFn: (...args: any[]) => void;
}

const Root = styled.div`
  width: 95%;
  height: 90%;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  overflow: hidden;
  border-radius: 8px;

  @media (min-width: 1024px) {
    width: 45%;
    height: 45%;
  }
`;

const MapDialogActionConfirmation: React.FC<IMapDialogActionConfirmation> = ({
  children,
  closeFn,
  open,
}) => {
  return (
    <AtlasBackdrop open={open} closeFn={closeFn}>
      <Root>{children}</Root>
    </AtlasBackdrop>
  );
};

export default MapDialogActionConfirmation;
