import {
  MapDialogActionTypes,
  MapDialogState,
  MAP_DIALOG_SETUP_FIELDS,
  MAP_DIALOG_VISIBILITY_HIDDEN,
  MAP_DIALOG_VISIBILITY_SHOW,
  MAP_LOCATE_UPDATE_FAIL,
  MAP_LOCATE_UPDATE_SUCCESS,
  MAP_LOCATE_VISIBILITY_HIDDEN,
  MAP_LOCATE_VISIBILITY_SHOW,
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
  locateOpen: false,
};

const mapDialogReducer = (
  state = initialState,
  action: MapDialogActionTypes
): MapDialogState => {
  switch (action.type) {
    case MAP_LOCATE_UPDATE_FAIL:
      return { ...state };

    case MAP_LOCATE_UPDATE_SUCCESS:
      return { ...initialState };

    case MAP_LOCATE_VISIBILITY_SHOW:
      return {
        ...initialState,
        locateOpen: true,
        activeResourceUUID: action.payload.uuid,
      };

    case MAP_LOCATE_VISIBILITY_HIDDEN:
      return { ...initialState, locateOpen: false };

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
