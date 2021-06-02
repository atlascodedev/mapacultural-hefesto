import { RouteComponentProps, Router } from "@reach/router";
import React from "react";
import AdminRoute from "../AdminRoute";
import {
  collections,
  DataCreationItem,
} from "../../../../config/collections.config";
import AdonisGallery from "../../AdonisGallery";
import Toolbox from "../../Toolbox";
import ColorPicker from "../../ColorPicker";
import CategoryDialog from "../../CategoryDialog";
import EntryCreation from "../../../DataCreation/DraftEntry";
import EntryView from "../../../DataCreation/EntryView";
import AppLayout from "../../../../layout_v2/Main";
import ProtectedRoute from "../../../Util/ProtectedRoute";
import MaterialTableCustom from "../../../Util/MaterialTable";
import {
  agentColumns,
  AGENT_COLLECTION_REF,
  eventColumns,
  EVENT_COLLECTION_REF,
  spaceColumns,
  SPACE_COLLECTON_REF,
} from "../../../../constants";
import MapDialog from "../../../MapDialog";

interface Props extends RouteComponentProps {}

const DashboardRoutes = ({ location, navigate, path, uri }: Props) => {
  return (
    <div>
      <AdonisGallery />
      <Toolbox />
      <ColorPicker />
      <CategoryDialog />
      <EntryCreation />
      <EntryView />
      <MapDialog />
      <AppLayout>
        <Router id="dashboardContent">
          {collections.map(
            (dataCreationItem: DataCreationItem, index: number) => {
              return (
                <AdminRoute
                  key={index}
                  dashboardItemID={dataCreationItem.itemID}
                  dashboardItemType={dataCreationItem.itemCategory}
                  path={dataCreationItem.routerPath}
                />
              );
            }
          )}

          <ProtectedRoute
            path="agentes"
            component={
              <div style={{ padding: "3%", paddingTop: "8%" }}>
                <MaterialTableCustom
                  collectionName="Agente"
                  collectionRef={AGENT_COLLECTION_REF}
                  columns={agentColumns}
                />
              </div>
            }
          />

          <ProtectedRoute
            path="eventos"
            component={
              <div style={{ padding: "3%", paddingTop: "8%" }}>
                <MaterialTableCustom
                  collectionRef={EVENT_COLLECTION_REF}
                  collectionName="Evento"
                  columns={eventColumns}
                />
              </div>
            }
          />

          <ProtectedRoute
            path="espacos-culturais"
            component={
              <div style={{ padding: "3%", paddingTop: "8%" }}>
                <MaterialTableCustom
                  collectionRef={SPACE_COLLECTON_REF}
                  collectionName="Espaço"
                  columns={spaceColumns}
                />
              </div>
            }
          />
        </Router>
      </AppLayout>
    </div>
  );
};

export default DashboardRoutes;
