import { Dispatch } from "react";
import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../..";
import { API } from "../../../constants";
import { db } from "../../../firebase";
import {
  MapDialogFields,
  MapDialogFieldsActionTypes,
  MapDialogVisibilityActionTypes,
  MapResourceApproveActionTypes,
  MapResourceRefuseActionTypes,
  MAP_DIALOG_DISCARD_FIELDS,
  MAP_DIALOG_SETUP_FIELDS,
  MAP_DIALOG_VISIBILITY_HIDDEN,
  MAP_DIALOG_VISIBILITY_SHOW,
  MAP_RESOURCE_APPROVE_FAIL,
  MAP_RESOURCE_APPROVE_START,
  MAP_RESOURCE_APPROVE_SUCCESS,
  MAP_RESOURCE_REFUSE_FAIL,
  MAP_RESOURCE_REFUSE_START,
  MAP_RESOURCE_REFUSE_SUCCESS,
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
  activeResourceUUID: string,
  activeResourceCollection: string
): MapDialogFieldsActionTypes => {
  return {
    type: MAP_DIALOG_SETUP_FIELDS,
    payload: {
      fields: fields,
      activeResource: activeResource,
      activeResourceEmail: activeResourceEmail,
      activeResourceUUID: activeResourceUUID,
      activeResourceCollection: activeResourceCollection,
    },
  };
};

export const mapDiscardFields = (): MapDialogFieldsActionTypes => {
  return {
    type: MAP_DIALOG_DISCARD_FIELDS,
  };
};

export const mapResourceReject = (
  uuid: string,
  email: string,
  collection: string,
  reason?: string
): ThunkAction<void, RootState, unknown, Action<string>> => {
  return async (
    dispatch: Dispatch<MapResourceRefuseActionTypes>,
    getState: () => RootState
  ) => {
    dispatch({
      type: MAP_RESOURCE_REFUSE_START,
    });

    console.log(uuid, email, collection);

    try {
      const resourceDocs = await db
        .collection(collection)
        .where("uuid", "==", uuid)
        .get();

      resourceDocs.forEach(async (docs) => {
        await docs.ref.update({ ...docs.data(), status: "NEGADO" });
      });

      await API.post("/mail/reject", {
        destinationMail: email,
        reason: reason,
      });

      dispatch({
        type: MAP_RESOURCE_REFUSE_SUCCESS,
      });
    } catch (error) {
      console.log(error);

      dispatch({
        type: MAP_RESOURCE_REFUSE_FAIL,
      });
    }
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

    console.log(collection);

    try {
      const resourceDocs = await db
        .collection(collection)
        .where("uuid", "==", uuid)
        .get();

      resourceDocs.forEach(async (doc) => {
        await doc.ref.update({ ...doc.data(), status: "APROVADO" });
      });

      await API.post("/mail/accept", { destinationMail: email });

      dispatch({
        type: MAP_RESOURCE_APPROVE_SUCCESS,
      });
    } catch (error) {
      dispatch({ type: MAP_RESOURCE_APPROVE_FAIL });
    }
  };
};
