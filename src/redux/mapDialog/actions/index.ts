import { Dispatch } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../..";
import { db } from "../../../firebase";
import {
  MapDialogFields,
  MapDialogFieldsActionTypes,
  MapDialogVisibilityActionTypes,
  MapResourceApproveActionTypes,
  MAP_DIALOG_DISCARD_FIELDS,
  MAP_DIALOG_SETUP_FIELDS,
  MAP_DIALOG_VISIBILITY_HIDDEN,
  MAP_DIALOG_VISIBILITY_SHOW,
  MAP_RESOURCE_APPROVE_FAIL,
  MAP_RESOURCE_APPROVE_START,
  MAP_RESOURCE_APPROVE_SUCCESS,
} from "../types";

export const mapDialogOpen = (): MapDialogVisibilityActionTypes => {
  return {
    type: MAP_DIALOG_VISIBILITY_SHOW,
  };
};

export const mapDialogClose = (): MapDialogVisibilityActionTypes => {
  return {
    type: MAP_DIALOG_VISIBILITY_HIDDEN,
  };
};

export const mapSetupFields = (
  fields: MapDialogFields[],
  activeResource: string,
  activeResourceEmail: string,
  activeResourceUUID: string
): MapDialogFieldsActionTypes => {
  return {
    type: MAP_DIALOG_SETUP_FIELDS,
    payload: {
      fields: fields,
      activeResource: activeResource,
      activeResourceEmail: activeResourceEmail,
      activeResourceUUID: activeResourceUUID,
    },
  };
};

export const mapDiscardFields = (): MapDialogFieldsActionTypes => {
  return {
    type: MAP_DIALOG_DISCARD_FIELDS,
  };
};

export const mapResourceApprove = (
  uuid: string,
  email: string,
  collection: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (
    dispatch: Dispatch<MapResourceApproveActionTypes>,
    getState: () => RootState
  ) => {
    dispatch({
      type: MAP_RESOURCE_APPROVE_START,
    });

    db.collection(collection)
      .where("uuid", "==", uuid)
      .get()
      .then((snapShot) => {
        snapShot.forEach((doc) => {
          doc.ref
            .update({ ...doc.data(), status: "APROVADO" })
            .then(() => {
              dispatch({ type: MAP_RESOURCE_APPROVE_SUCCESS });
            })
            .catch((error) => {
              dispatch({ type: MAP_RESOURCE_APPROVE_FAIL });
            });
        });
      })
      .catch((error) => {
        dispatch({ type: MAP_RESOURCE_APPROVE_FAIL });
        console.log(error);
      });
  };
};
