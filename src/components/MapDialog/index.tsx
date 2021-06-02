import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux";
import { mapDialogClose, mapDialogOpen } from "../../redux/mapDialog/actions";
import AtlasBackdrop from "../Util/AtlasBackdrop";
import MapDialogActionConfirmation from "./ActionConfirmation";
import MapDialogActions from "./Actions";
import MapDialogBase from "./Base";
import MapDialogContent from "./Content";
import MapDialogHeader from "./Header";

export interface IMapDialog extends MapDialogReduxProps {}

const MapDialog = ({ closeDialog, open }: IMapDialog) => {
  const [approveDialogState, setApproveDialogState] =
    React.useState<boolean>(false);

  const [refuseDialogState, setRefuseDialogState] =
    React.useState<boolean>(false);

  return (
    <div>
      <AtlasBackdrop closeFn={closeDialog} open={open}>
        <MapDialogBase>
          <MapDialogHeader closeFn={closeDialog} title="Placeholder Title" />
          <MapDialogActions
            approveAction={() => setApproveDialogState(true)}
            refuseAction={() => setRefuseDialogState(true)}
          />
          <MapDialogContent></MapDialogContent>
        </MapDialogBase>
      </AtlasBackdrop>

      <MapDialogActionConfirmation
        submitFn={() => console.log("submit approval")}
        title={"Aprovar inscrição"}
        closeFn={() => setApproveDialogState(false)}
        open={approveDialogState}
      >
        <div>holiday</div>
      </MapDialogActionConfirmation>

      <MapDialogActionConfirmation
        submitFn={() => console.log("submit denial")}
        title={"Recusar inscrição"}
        closeFn={() => setRefuseDialogState(false)}
        open={refuseDialogState}
      >
        <div>holiday</div>
      </MapDialogActionConfirmation>
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
