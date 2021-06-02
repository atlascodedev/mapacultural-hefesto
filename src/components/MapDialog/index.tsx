import React from "react";
import AtlasBackdrop from "../Util/AtlasBackdrop";

export interface IMapDialog {
  open: boolean;
  closeFn: (...args: any[]) => void;
}

const MapDialog = ({ closeFn, open }: IMapDialog) => {
  return (
    <AtlasBackdrop closeFn={closeFn} open={open}>
      <div>its a holyday i got hoes</div>
    </AtlasBackdrop>
  );
};

export default MapDialog;
