import React, { useState, useEffect } from "react";
import { OrganisationUnitTree } from "@dhis2/ui";
import { useDataQuery } from "@dhis2/app-runtime";

const ORGUNIT_QUERY = {
  orgUnits: {
    resource: "organisationUnits",
    id: "ImspTQPwCqd",
    params: {
      paging: false,
      includeChildren: true,
      includeDescendants: true,
      fields: "id, path, children, displayName",
    },
  },
};

export const OrgUnitTree = ({ onSelectOU }) => {

  const { loading, error, data } = useDataQuery(ORGUNIT_QUERY);

  function handleChange(e) {
    onSelectOU(e.id);
  }

/*   useEffect(()=>{
    if (onSelectOU){
      console.log(onSelectOU)
    }
  }, [onSelectOU]) */

  return (
    <React.Fragment>
      <p>Select an organisation unit from the tree:</p>
      {// display that the data is being loaded
      // when loading is true
      loading && "Loading..."}

      {// display the error message
      // is an error occurred
      error && error.message}

      {// if there is any data available
      data?.orgUnits?.organisationUnits && (
        <OrganisationUnitTree
          name="Root org unit"
          data={data}
          roots="ImspTQPwCqd"
          onChange={handleChange}
        />
      )}
    </React.Fragment>
  );
};
