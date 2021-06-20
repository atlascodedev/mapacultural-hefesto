import React from "react";
import { RootState } from "../../redux";
import AtlasBackdrop from "../Util/AtlasBackdrop";
import { connect, ConnectedProps } from "react-redux";
import {
  maplocateDialogClose,
  mapLocateUpdate,
} from "../../redux/mapDialog/actions";
import styled from "styled-components";
import { SvgIcon, Button, TextField } from "@material-ui/core";
import { Cancel } from "@material-ui/icons";

interface Props extends MapLocalizationDialgoReduxProps {}

const MapLocalizationDialog = ({
  closeDialog,
  open,
  updateLocation,
}: Props) => {
  const [latitude, setLatitude] = React.useState<string>("");
  const [longitude, setLongitude] = React.useState<string>("");

  React.useEffect(() => {
    setLatitude("");
    setLongitude("");
  }, [open]);

  return (
    <AtlasBackdrop open={open} closeFn={closeDialog}>
      <Root>
        <Header>
          <Title>Atualizar latitude e longitude</Title>
          <CloseButton>
            <SvgIcon
              component={Cancel}
              style={{ cursor: "pointer" }}
              onClick={closeDialog}
            />
          </CloseButton>
        </Header>
        <Body>
          <TextField
            style={{ minWidth: "250px" }}
            variant="outlined"
            label="Latitude"
            placeholder="Digite a latitude aqui"
            value={latitude}
            onChange={(event) => setLatitude(event.target.value)}
          />

          <TextField
            style={{ minWidth: "250px" }}
            variant="outlined"
            label="Longitude"
            placeholder="Digite a longitude aqui"
            value={longitude}
            onChange={(event) => setLongitude(event.target.value)}
          />
        </Body>

        <Footer>
          <Button onClick={closeDialog} variant="outlined" color="primary">
            Cancelar
          </Button>
          <Button
            disabled={longitude.length <= 0 || latitude.length <= 0}
            variant="contained"
            onClick={() => updateLocation(latitude, longitude)}
            color="primary"
          >
            Confirmar
          </Button>
        </Footer>
      </Root>
    </AtlasBackdrop>
  );
};

const mapStateToProps = (state: RootState) => ({
  open: state.mapDialog.locateOpen,
});

const mapDispatchToProps = {
  closeDialog: maplocateDialogClose,
  updateLocation: mapLocateUpdate,
};

const mapLocalizationDialogConnector = connect(
  mapStateToProps,
  mapDispatchToProps
);

type MapLocalizationDialgoReduxProps = ConnectedProps<
  typeof mapLocalizationDialogConnector
>;

export default mapLocalizationDialogConnector(MapLocalizationDialog);

const FOOTER_HEADER_HEIGHT = 18;
const BODY_HEIGHT = 100 - FOOTER_HEADER_HEIGHT * 2;

const Root = styled.div`
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 60%;
  width: 95%;

  @media (min-width: 1024px) {
    height: 60%;
    width: 40%;
  }
`;

const Header = styled.div`
  width: 100%;
  height: ${FOOTER_HEADER_HEIGHT + "%"};
  border-bottom: 1px solid #c5c5c5;
  display: flex;
  align-items: center;
  padding: 10px 25px;
`;

const Body = styled.div`
  overflow-y: scroll;
  height: ${BODY_HEIGHT + "%"};
  width: 100%;
  display: flex;
  align-items: center;
  row-gap: 35px;
  flex-direction: column;
  justify-content: center;
`;

const Footer = styled.div`
  height: ${FOOTER_HEADER_HEIGHT + "%"};
  border-top: 1px solid #c5c5c5;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 50px;
`;

const Title = styled.div`
  font-size: 16px;
  color: #333;
  font-weight: bold;

  @media (min-width: 1024px) {
    font-size: 20px;
  }
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-grow: 1;
`;
