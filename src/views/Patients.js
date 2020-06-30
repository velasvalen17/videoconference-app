import React, { useState } from "react";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";
import { useDataQuery } from "@dhis2/app-runtime";

import { OrgUnitTree } from "../components";

const PROGRAMS_QUERY = {
  programs: {
    resource: "programs",
    params: {
      paging: false,
      fields: "id, displayName",
    },
  },
};

export const Patients = () => {
  const [program, setProgram] = useState("");

  const { loading, error, data } = useDataQuery(PROGRAMS_QUERY);

  const handleChange = (event) => {
    setProgram(event.selected);
    console.log(event.selected);
  };

  return (
    <React.Fragment>
      <h1>Patients</h1>
      <p> Select an organisation unit from the tree: </p>
      <OrgUnitTree></OrgUnitTree>
      <p> Select a tracker program from the list: </p>
      {// display that the data is being loaded
      // when loading is true
      loading && "Loading..."}

      {// display the error message
      // is an error occurred
      error && error.message}

      {// if there is any data available
      data?.programs?.programs && (
        <SingleSelect onChange={handleChange}>
          {data.programs.programs.map(({ id, displayName }) => (
            <SingleSelectOption key={id} label={displayName} value={id} />
          ))}
        </SingleSelect>
      )}
    </React.Fragment>
  );
};
