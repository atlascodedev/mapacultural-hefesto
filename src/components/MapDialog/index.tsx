import { TextField } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux";
import {
  mapDialogClose,
  mapDialogOpen,
  mapResourceApprove,
  mapResourceReject,
} from "../../redux/mapDialog/actions";
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
  activeResourceEmail,
  approve,
  activeResourceUUID,
  activeResourceCollection,
  refuse,
}: IMapDialog) => {
  const [approveDialogState, setApproveDialogState] =
    React.useState<boolean>(false);

  const [refuseDialogState, setRefuseDialogState] =
    React.useState<boolean>(false);

  const [refusalReason, setRefusalReason] = React.useState<string>("");

  console.log(activeResourceUUID);
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
                  key={index}
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
        submitFn={() => {
          approve(
            activeResourceUUID,
            activeResourceEmail,
            activeResourceCollection
          );
          setApproveDialogState(false);
        }}
        title={"Aprovar inscrição"}
        closeFn={() => setApproveDialogState(false)}
        open={approveDialogState}
      >
        <div
          style={{
            display: "flex",
            padding: "30px",
            justifyContent: "center",
            textAlign: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div style={{ fontSize: "1.5rem" }}>
            Um e-mail será enviado do usuário notificando-o sobre sua aprovação
            deste para participar do Mapeamento Cultural de Taquara como{" "}
            <span>{activeResource.toLocaleLowerCase()}</span>.
          </div>
        </div>
      </MapDialogActionConfirmation>

      <MapDialogActionConfirmation
        submitFn={() => {
          refuse(
            activeResourceUUID,
            activeResourceEmail,
            activeResourceCollection,
            refusalReason
          );

          setRefuseDialogState(false);
        }}
        title={"Recusar inscrição"}
        closeFn={() => setRefuseDialogState(false)}
        open={refuseDialogState}
      >
        <div
          style={{
            display: "flex",
            padding: "30px",
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            height: "100%",
          }}
        >
          <div style={{ fontSize: "1rem" }}>
            Um e-mail será enviado do usuário notificando-o sobre sua reprovação
            deste para participar do Mapeamento Cultural de Taquara como{" "}
            <span>{activeResource.toLocaleLowerCase()}</span>. Você pode também
            enviar uma razão adicional para o inscrito digitando-a na caixa de
            texto abaixo.
          </div>

          <TextField
            fullWidth
            variant="outlined"
            multiline
            style={{ paddingBottom: "1em", paddingTop: "1em" }}
            rows={4}
            value={refusalReason}
            onChange={(event) => setRefusalReason(event.target.value)}
          />
        </div>
      </MapDialogActionConfirmation>
    </div>
  );
};

const mapStateToProps = (rootState: RootState) => ({
  open: rootState.mapDialog.open,
  fields: rootState.mapDialog.fields,
  activeResource: rootState.mapDialog.activeResource,
  activeResourceEmail: rootState.mapDialog.activeResourceEmail,
  activeResourceUUID: rootState.mapDialog.activeResourceUUID,
  activeResourceCollection: rootState.mapDialog.activeResourceCollection,
});

const mapDispatchToProps = {
  closeDialog: mapDialogClose,
  openDialog: mapDialogOpen,
  approve: mapResourceApprove,
  refuse: mapResourceReject,
};

const mapDialogConnector = connect(mapStateToProps, mapDispatchToProps);

export type MapDialogReduxProps = ConnectedProps<typeof mapDialogConnector>;

export default mapDialogConnector(MapDialog);
