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

const MapDialog = ({
  closeDialog,
  open,
  activeResource,
  fields,
}: IMapDialog) => {
  const [approveDialogState, setApproveDialogState] =
    React.useState<boolean>(false);

  const [refuseDialogState, setRefuseDialogState] =
    React.useState<boolean>(false);

  console.log(fields);
  return (
    <div>
      <AtlasBackdrop closeFn={closeDialog} open={open}>
        <MapDialogBase>
          <MapDialogHeader closeFn={closeDialog} title={activeResource} />
          <MapDialogActions
            approveAction={() => setApproveDialogState(true)}
            refuseAction={() => setRefuseDialogState(true)}
          />
          <MapDialogContent>
            {fields.map((value, index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "center",
                    gap: "10px",
                  }}
                >
                  <div style={{ fontWeight: 800, fontSize: "1.25rem" }}>
                    {value.label}
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    {value.value}
                  </div>
                </div>
              );
            })}
          </MapDialogContent>
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
  fields: rootState.mapDialog.fields,
  activeResource: rootState.mapDialog.activeResource,
});

const mapDispatchToProps = {
  closeDialog: mapDialogClose,
  openDialog: mapDialogOpen,
};

const mapDialogConnector = connect(mapStateToProps, mapDispatchToProps);

export type MapDialogReduxProps = ConnectedProps<typeof mapDialogConnector>;

export default mapDialogConnector(MapDialog);
