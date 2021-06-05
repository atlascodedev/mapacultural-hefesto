import { TextField } from "@material-ui/core";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { API } from "../../constants";
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
  activeResourceEmail,
}: IMapDialog) => {
  const [approveDialogState, setApproveDialogState] =
    React.useState<boolean>(false);

  const [refuseDialogState, setRefuseDialogState] =
    React.useState<boolean>(false);

  const [refusalReason, setRefusalReason] = React.useState<string>("");

  console.log(fields);
  console.log(activeResourceEmail);
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
        submitFn={() =>
          API.post("/mail/accept", { destinationMail: activeResourceEmail })
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
        }
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
        submitFn={() => console.log("ok")}
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
});

const mapDispatchToProps = {
  closeDialog: mapDialogClose,
  openDialog: mapDialogOpen,
};

const mapDialogConnector = connect(mapStateToProps, mapDispatchToProps);

export type MapDialogReduxProps = ConnectedProps<typeof mapDialogConnector>;

export default mapDialogConnector(MapDialog);
