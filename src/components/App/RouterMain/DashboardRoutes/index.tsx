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
  eventColumns,
  spaceColumns,
} from "../../../../constants";

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
                  collectionRef="log"
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
                  collectionRef="event"
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
                  collectionRef="spaces"
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
