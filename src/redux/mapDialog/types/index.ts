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

export type MapDialogActionTypes = MapDialogVisibilityActionTypes;

export interface MapDialogState {
  open: boolean;
}
