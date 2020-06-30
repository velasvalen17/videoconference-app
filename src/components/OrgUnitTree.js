import React from "react";
import { OrganisationUnitTree } from "@dhis2/ui";

const Wrapper = () => {
  return <OrganisationUnitTree name="Root org unit" roots="ImspTQPwCqd" />;
};

const ORGUNIT_QUERY = {
  programs: {
    resource: "organisationUnits",
    params: {
      paging: false,
      fields: "id, displayName",
    },
  },
};

export const OrgUnitTree = () => {
  return (
    <React.Fragment>
      <h1>Checking</h1>
    </React.Fragment>
  );
};
