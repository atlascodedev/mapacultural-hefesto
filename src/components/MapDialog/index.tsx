import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RegistrationStatus } from "../../@types/project";
import { RootState } from "../../redux";
import { mapDialogClose, mapDialogOpen } from "../../redux/mapDialog/actions";
import AtlasBackdrop from "../Util/AtlasBackdrop";
import MapDialogActionConfirmation from "./ActionConfirmation";
import MapDialogActions from "./Actions";
import MapDialogBase from "./Base";
import MapDialogContent from "./Content";
import MapDialogHeader from "./Header";

export interface IMapDialog extends MapDialogReduxProps {}

const MapDialog = ({ closeDialog, openDialog, open }: IMapDialog) => {
  const [confirmationDialog, setConfirmationDialog] = React.useState<{
    actionStatus: RegistrationStatus;
    open: boolean;
  }>({ actionStatus: "ANÁLISE", open: false });

  return (
    <div>
      <AtlasBackdrop closeFn={closeDialog} open={open}>
        <MapDialogBase>
          <MapDialogHeader closeFn={closeDialog} title="Placeholder Title" />
          <MapDialogActions
            approveAction={() => console.log("i approve")}
            refuseAction={() => console.log("i refuse")}
          />
          <MapDialogContent>
            <div style={{ height: "1000px" }}></div>
          </MapDialogContent>
        </MapDialogBase>
      </AtlasBackdrop>
    </div>
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
