import React, { useState, useEffect } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";

export const ProgramDropdown = ({programList, ouSelected}) => {

/*   const PROGRAMS_QUERY = {
    programsOU: {
      resource: "organisationUnits",
      id: `${ouSelected || "DiszpKrYNg8"}`,
      params: {
        paging: false,
        fields: "programs",
      },
    },
  };

  const { loading, error, data, refetch } = useDataQuery(PROGRAMS_QUERY); */

  return (
    <React.Fragment>
      <p> Select a tracker program from the list: </p>

      {// display that the data is being loaded
      // when loading is true
      loading && "Loading..."}

      {// display the error message
      // is an error occurred
      error && error.message}

      {// if there is any data available
      programList?.programs?.programs && (
        <SingleSelect>
          {programList.programs.programs.map(({ id, displayName }) => (
            <SingleSelectOption key={id} label={displayName} value={id} />
          ))}
        </SingleSelect>
      )}
    </React.Fragment>
  );
};
