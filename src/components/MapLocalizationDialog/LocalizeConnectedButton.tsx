import React from "react";
import styled from "styled-components";
import { SvgIcon, Tooltip } from "@material-ui/core";
import { Room } from "@material-ui/icons";
import { RootState } from "../../redux";
import { ConnectedProps, connect } from "react-redux";
import { mapLocateDialogOpen } from "../../redux/mapDialog/actions";

interface Props extends LocalizeConnectedButtonReduxProps {
  resourceUUID: string;
}

const LocalizeConnectedButton = ({ resourceUUID, openDialog }: Props) => {
  console.log(resourceUUID);
  return (
    <Tooltip title="Localizar espaço cultural">
      <Root onClick={() => openDialog(resourceUUID)}>
        <SvgIcon component={Room} />
      </Root>
    </Tooltip>
  );
};

const mapStateToProps = (state: RootState) => ({});

const mapDispatchToProps = {
  openDialog: mapLocateDialogOpen,
};

const localizeButtonConnector = connect(mapStateToProps, mapDispatchToProps);

type LocalizeConnectedButtonReduxProps = ConnectedProps<
  typeof localizeButtonConnector
>;

export default localizeButtonConnector(LocalizeConnectedButton);

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
