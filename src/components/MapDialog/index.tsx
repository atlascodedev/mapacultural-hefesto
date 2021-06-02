import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux";
import { mapDialogClose, mapDialogOpen } from "../../redux/mapDialog/actions";
import AtlasBackdrop from "../Util/AtlasBackdrop";

export interface IMapDialog extends MapDialogReduxProps {}

const MapDialog = ({ closeDialog, openDialog, open }: IMapDialog) => {
  console.log(open, `aqui`);

  return (
    <AtlasBackdrop closeFn={closeDialog} open={open}>
      <div>its a holyday i got hoes</div>
    </AtlasBackdrop>
  );
};

const mapStateToProps = (rootState: RootState) => ({
  open: rootState.mapDialog.open,
});

const mapDispatchToProps = {
  closeDialog: mapDialogClose,
  openDialog: mapDialogOpen,
};

const mapDialogConnector = connect(mapStateToProps, mapDispatchToProps);

export type MapDialogReduxProps = ConnectedProps<typeof mapDialogConnector>;

export default mapDialogConnector(MapDialog);
