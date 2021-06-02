import {
  MapDialogActionTypes,
  MapDialogState,
  MAP_DIALOG_SETUP_FIELDS,
  MAP_DIALOG_VISIBILITY_HIDDEN,
  MAP_DIALOG_VISIBILITY_SHOW,
} from "../types";

const initialState: MapDialogState = {
  open: false,
  fields: [],
  activeResource: "",
};

const mapDialogReducer = (
  state = initialState,
  action: MapDialogActionTypes
): MapDialogState => {
  switch (action.type) {
    case MAP_DIALOG_SETUP_FIELDS:
      return {
        ...state,
        open: true,
        fields: action.payload.fields,
        activeResource: action.payload.activeResource,
      };

    case MAP_DIALOG_VISIBILITY_SHOW:
      return { ...state, open: true };

    case MAP_DIALOG_VISIBILITY_HIDDEN:
      return { ...state, open: false };

    default:
      return state;
  }
};

export default mapDialogReducer;
