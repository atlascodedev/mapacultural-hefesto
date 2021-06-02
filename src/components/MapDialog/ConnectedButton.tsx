import { SvgIcon } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux";
import { mapDialogClose, mapDialogOpen } from "../../redux/mapDialog/actions";

export interface IConnectedButton extends MapDialogButtonReduxProps {}

const ConnectedButton = ({
  openDialog,
  closeDialog,
  open,
}: IConnectedButton) => {
  console.log(open);
  return (
    <div
      onClick={openDialog}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <SvgIcon component={Settings} />
    </div>
  );
};

const mapStateToProps = (rootState: RootState) => ({
  open: rootState.mapDialog.open,
});

const mapDispatchToProps = {
  openDialog: mapDialogOpen,
  closeDialog: mapDialogClose,
};

const mapDialogButtonConnector = connect(mapStateToProps, mapDispatchToProps);

export type MapDialogButtonReduxProps = ConnectedProps<
  typeof mapDialogButtonConnector
>;

export default mapDialogButtonConnector(ConnectedButton);
