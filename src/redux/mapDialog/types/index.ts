export const MAP_DIALOG_SETUP_FIELDS = "MAP_DIALOG_SETUP_FIELDS";
export const MAP_DIALOG_DISCARD_FIELDS = "MAP_DIALOG_DISCARD_FIELDS";

interface MapDialogSetupFields {
  type: typeof MAP_DIALOG_SETUP_FIELDS;
  payload: {
    fields: MapDialogFields[];
    activeResource: string;
    activeResourceEmail: string;
  };
}

interface MapDialogDiscardFields {
  type: typeof MAP_DIALOG_DISCARD_FIELDS;
}

export type MapDialogFieldsActionTypes =
  | MapDialogDiscardFields
  | MapDialogSetupFields;

export const MAP_DIALOG_VISIBILITY_SHOW = "MAP_DIALOG_VISIBILITY_SHOW";
export const MAP_DIALOG_VISIBILITY_HIDDEN = "MAP_DIALOG_VISIBILITY_HIDDEN";

interface MapDialogVisibilityShow {
  type: typeof MAP_DIALOG_VISIBILITY_SHOW;
}

interface MapDialogVisibilityHidden {
  type: typeof MAP_DIALOG_VISIBILITY_HIDDEN;
}

export type MapDialogVisibilityActionTypes =
  | MapDialogVisibilityShow
  | MapDialogVisibilityHidden;

export type MapDialogActionTypes =
  | MapDialogVisibilityActionTypes
  | MapDialogFieldsActionTypes;

export interface MapDialogState {
  open: boolean;
  fields: MapDialogFields[];
  activeResource: string;
  activeResourceEmail: string;
}

export interface MapDialogFields {
  label: string;
  value: any;
}
