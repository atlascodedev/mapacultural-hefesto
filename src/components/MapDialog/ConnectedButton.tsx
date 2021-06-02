import { SvgIcon } from "@material-ui/core";
import { Settings } from "@material-ui/icons";
import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { RootState } from "../../redux";
import {
  mapDialogClose,
  mapDialogOpen,
  mapSetupFields,
} from "../../redux/mapDialog/actions";
import { MapDialogFields } from "../../redux/mapDialog/types";

export interface IConnectedButton extends MapDialogButtonReduxProps {
  fieldsData: MapDialogFields[];
  resourceName: string;
  resourceEmail: string;
  resourceUUID: string;
}

const ConnectedButton = ({
  fieldsData,
  setFields,
  resourceName,
  resourceEmail,
  resourceUUID,
}: IConnectedButton) => {
  return (
    <div
      onClick={() =>
        setFields(fieldsData, resourceName, resourceEmail, resourceUUID)
      }
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
  setFields: mapSetupFields,
};

const mapDialogButtonConnector = connect(mapStateToProps, mapDispatchToProps);

export type MapDialogButtonReduxProps = ConnectedProps<
  typeof mapDialogButtonConnector
>;

export default mapDialogButtonConnector(ConnectedButton);
