import React, { useState } from "react";
import { OrgUnitTree, ProgramDropdown, Form } from "../components";
import { useDataQuery } from "@dhis2/app-runtime";

export const Patients = () => {
  const [ouSelected, setOuSelected] = useState(null);
  const [programSelected, setProgramSelected] = useState(null);
  const PROGRAMS_QUERY = {
    programs: {
      resource: "programs",
      params: {
        paging: false,
        fields: "id, displayName",
      },
    },
  };

  const { loading, error, data, refetch } = useDataQuery(PROGRAMS_QUERY);

  return (
    <React.Fragment>
      <h1>Patients</h1>

      <OrgUnitTree onSelectOU={setOuSelected} />

      {// display that the data is being loaded
      // when loading is true
      loading && "Loading..."}

      {// display the error message
      // is an error occurred
      error && error.message}

      {// if there is any data available
      data?.programs?.programs && (
        <ProgramDropdown
          programList={data}
          ouSelected={ouSelected}
          onSelectProgram={setProgramSelected}
        />
      )}

      {ouSelected && programSelected && (
        <Form programSelected={programSelected} ouSelected={ouSelected} />
      )}
    </React.Fragment>
  );
};
