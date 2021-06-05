import {
  MapDialogActionTypes,
  MapDialogState,
  MAP_DIALOG_SETUP_FIELDS,
  MAP_DIALOG_VISIBILITY_HIDDEN,
  MAP_DIALOG_VISIBILITY_SHOW,
  MAP_RESOURCE_APPROVE_FAIL,
  MAP_RESOURCE_APPROVE_SUCCESS,
  MAP_RESOURCE_REFUSE_FAIL,
  MAP_RESOURCE_REFUSE_SUCCESS,
} from "../types";

const initialState: MapDialogState = {
  open: false,
  fields: [],
  activeResource: "",
  activeResourceEmail: "",
  activeResourceUUID: "",
  activeResourceCollection: "",
};

const mapDialogReducer = (
  state = initialState,
  action: MapDialogActionTypes
): MapDialogState => {
  switch (action.type) {
    case MAP_RESOURCE_APPROVE_SUCCESS:
      return { ...initialState, open: false };

    case MAP_RESOURCE_APPROVE_FAIL:
      return { ...initialState, open: false };

    case MAP_RESOURCE_REFUSE_FAIL:
      return { ...initialState, open: false };

    case MAP_RESOURCE_REFUSE_SUCCESS:
      return initialState;

    case MAP_DIALOG_SETUP_FIELDS:
      return {
        ...state,
        open: true,
        fields: action.payload.fields,
        activeResource: action.payload.activeResource,
        activeResourceEmail: action.payload.activeResourceEmail,
        activeResourceUUID: action.payload.activeResourceUUID,
        activeResourceCollection: action.payload.activeResourceCollection,
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
