import {
  MapDialogFields,
  MapDialogFieldsActionTypes,
  MapDialogVisibilityActionTypes,
  MAP_DIALOG_DISCARD_FIELDS,
  MAP_DIALOG_SETUP_FIELDS,
  MAP_DIALOG_VISIBILITY_HIDDEN,
  MAP_DIALOG_VISIBILITY_SHOW,
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
  activeResource: string
): MapDialogFieldsActionTypes => {
  return {
    type: MAP_DIALOG_SETUP_FIELDS,
    payload: {
      fields: fields,
      activeResource: activeResource,
    },
  };
};

export const mapDiscardFields = (): MapDialogFieldsActionTypes => {
  return {
    type: MAP_DIALOG_DISCARD_FIELDS,
  };
};
