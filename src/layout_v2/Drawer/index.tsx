import {
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SvgIcon,
} from "@material-ui/core";
import {
  AssignmentInd,
  EventAvailable,
  Person,
  Room,
} from "@material-ui/icons";
import styled from "styled-components";
import React from "react";
import IconComponent from "../../components/Util/IconComponent";
import { DataCreationItem } from "../../config/collections.config";
import getCurrentPath from "../../helper/currentPath";
import { Link } from "@reach/router";
import { basePath, dashboardPath } from "../../config/routes.config";

interface Props {
  open: boolean;
  toggleDrawer: (open: boolean) => void;
  logo: string;
  sidebarItems: DataCreationItem[];
}

const LayoutDrawerImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 75%;
    padding: 10px;
    height: 75%;
    max-width: 200px;
    max-height: auto;
  }
`;

const LayoutDrawer = ({ open, toggleDrawer, logo, sidebarItems }: Props) => {
  const path = getCurrentPath();

  return (
    <div>
      <SwipeableDrawer
        onClose={() => toggleDrawer(false)}
        onOpen={() => toggleDrawer(true)}
        open={open}
        anchor="left"
      >
        <List style={{ color: "#5d6d7c" }}>
          <ListItem divider>
            <LayoutDrawerImageContainer>
              <img src={logo} alt="Logo" />
            </LayoutDrawerImageContainer>
          </ListItem>

          {sidebarItems.map((item, index: number) => {
            return (
              <ListItem
                onClick={() => toggleDrawer(false)}
                component={Link}
                to={`/${basePath}/${dashboardPath}/${item.routerPath}`}
                key={index}
                style={{ padding: "10px", paddingLeft: "20px" }}
                alignItems="center"
              >
                <ListItemIcon>
                  <IconComponent iconType={item.sidebarIcon} clickable />
                </ListItemIcon>
                <ListItemText
                  style={{
                    color: path == item.routerPath ? "#F15D3C" : "initial",
                  }}
                >
                  {item.sidebarLabel}
                </ListItemText>
              </ListItem>
            );
          })}
          <ListItem
            onClick={() => toggleDrawer(false)}
            component={Link}
            to={`/${basePath}/${dashboardPath}/eventos`}
            style={{ padding: "10px", paddingLeft: "20px" }}
            alignItems="center"
          >
            <ListItemIcon>
              <SvgIcon component={EventAvailable} />
            </ListItemIcon>

            <ListItemText
              style={{ color: path === "eventos" ? "#F15D3C" : "initial" }}
            >
              Eventos
            </ListItemText>
          </ListItem>
          <ListItem
            onClick={() => toggleDrawer(false)}
            component={Link}
            to={`/${basePath}/${dashboardPath}/agentes`}
            style={{ padding: "10px", paddingLeft: "20px" }}
            alignItems="center"
          >
            <ListItemIcon>
              <SvgIcon component={AssignmentInd} />
            </ListItemIcon>

            <ListItemText
              style={{ color: path === "agentes" ? "#F15D3C" : "initial" }}
            >
              Agentes
            </ListItemText>
          </ListItem>

          <ListItem
            onClick={() => toggleDrawer(false)}
            component={Link}
            to={`/${basePath}/${dashboardPath}/espacos-culturais`}
            style={{ padding: "10px", paddingLeft: "20px" }}
            alignItems="center"
          >
            <ListItemIcon>
              <SvgIcon component={Room} />
            </ListItemIcon>

            <ListItemText
              style={{
                color: path === "espacos-culturais" ? "#F15D3C" : "initial",
              }}
            >
              Espaços culturais
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
    </div>
  );
};

export default LayoutDrawer;
