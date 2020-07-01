import React, { useState } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";

const PROGRAMS_QUERY = {
  programs: {
    resource: "programs",
    params: {
      paging: false,
      fields: "id, displayName",
    },
  },
};

export const ProgramDropdown = () => {
  const [program, setProgram] = useState(0);

  const { loading, error, data } = useDataQuery(PROGRAMS_QUERY);

  const handleChange = (event) => {
    setProgram(event.selected);
    console.log(program);
  };
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
