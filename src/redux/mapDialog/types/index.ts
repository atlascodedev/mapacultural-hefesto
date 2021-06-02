export const MAP_RESOURCE_REFUSE_START = "MAP_RESOURCE_REFUSE_START";
export const MAP_RESOURCE_REFUSE_SUCCESS = "MAP_RESOURCE_REFUSE_SUCCESS";
export const MAP_RESOURCE_REFUSE_FAIL = "MAP_RESOURCE_REFUSE_FAIL";

interface MapResourceRefuseStart {
  type: typeof MAP_RESOURCE_REFUSE_START;
}

interface MapResourceRefuseSuccess {
  type: typeof MAP_RESOURCE_REFUSE_SUCCESS;
}

interface MapResourceRefuseFail {
  type: typeof MAP_RESOURCE_REFUSE_FAIL;
}

export type MapResourceRefuseActionTypes =
  | MapResourceRefuseStart
  | MapResourceRefuseSuccess
  | MapResourceRefuseFail;

export const MAP_RESOURCE_APPROVE_START = "MAP_RESOURCE_APPROVE_START";
export const MAP_RESOURCE_APPROVE_SUCCESS = "MAP_RESOURCE_APPROVE_SUCCESS";
export const MAP_RESOURCE_APPROVE_FAIL = "MAP_RESOURCE_APPROVE_FAIL";

interface MapResourceApproveStart {
  type: typeof MAP_RESOURCE_APPROVE_START;
}

interface MapResourceApproveSuccess {
  type: typeof MAP_RESOURCE_APPROVE_SUCCESS;
}

interface MapResourceApproveFail {
  type: typeof MAP_RESOURCE_APPROVE_FAIL;
}

export type MapResourceApproveActionTypes =
  | MapResourceApproveStart
  | MapResourceApproveSuccess
  | MapResourceApproveFail;

export const MAP_DIALOG_SETUP_FIELDS = "MAP_DIALOG_SETUP_FIELDS";
export const MAP_DIALOG_DISCARD_FIELDS = "MAP_DIALOG_DISCARD_FIELDS";

interface MapDialogSetupFields {
  type: typeof MAP_DIALOG_SETUP_FIELDS;
  payload: {
    fields: MapDialogFields[];
    activeResource: string;
    activeResourceEmail: string;
    activeResourceUUID: string;
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
  | MapDialogFieldsActionTypes
  | MapResourceApproveActionTypes
  | MapResourceRefuseActionTypes;

export interface MapDialogState {
  open: boolean;
  fields: MapDialogFields[];
  activeResource: string;
  activeResourceEmail: string;
  activeResourceUUID: string;
}

export interface MapDialogFields {
  label: string;
  value: any;
}
