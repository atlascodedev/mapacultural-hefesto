import { SvgIcon } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

export interface IMapDialogHeader {
  closeFn: (...args: any[]) => void;
  title: string;
}

const Root = styled.div`
  width: 100%;
  display: flex;
  color: #333;
  padding: 20px 35px;
  border-bottom: 1px #e6e6e6 solid;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;

  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const CloseButton = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MapDialogHeader = ({ closeFn, title }: IMapDialogHeader) => {
  return (
    <Root>
      <Title>{title}</Title>
      <CloseButton>
        <SvgIcon
          style={{ cursor: "pointer" }}
          onClick={closeFn}
          component={Cancel}
        />
      </CloseButton>
    </Root>
  );
};

export default MapDialogHeader;
