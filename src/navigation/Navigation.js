import { useHistory, useRouteMatch } from "react-router-dom";
import { PropTypes } from "@dhis2/prop-types";
import React from "react";
import { Menu, MenuItem } from "@dhis2/ui";

const NavigationItem = ({ path, label }) => {
  // browser history object
  const history = useHistory();

  // "null" when not active, "object" when active
  const routeMatch = useRouteMatch(path);
  // If "isActive" is not null and "isActive.isExact" is true
  const isActive = routeMatch?.isExact;

  // Callback called when clicking on the menu item.
  // If the menu item is not active, navigate to the path
  const onClick = () => !isActive && history.push(path);

  return <MenuItem label={label} active={isActive} onClick={onClick} />;
};

NavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

export const Navigation = () => (
  <Menu>
    <NavigationItem
      // Menu item for the home page
      label="Home"
      path="/"
    />

    <NavigationItem
      // Menu item for the patients page
      label="Patients"
      path="/patients"
    />

    <NavigationItem
      // Menu item for the videocall page
      label="VideoCall"
      path="/videocall"
    />

    <NavigationItem
      // Menu item for the statistics page
      label="Statistics"
      path="/statistics"
    />
  </Menu>
);
