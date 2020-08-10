import React, { useState, useEffect } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";

export const ProgramDropdown = ({programList, ouSelected}) => {
  
  const PROGRAMSOU_QUERY = {
    programsOU: {
      resource: "organisationUnits",
      id: ({ouSelected}) => ouSelected || "DiszpKrYNg8",
      params: {
        paging: false,
        fields: "programs",
      },
    },
  };

  const { loading, error, data, refetch } = useDataQuery(PROGRAMSOU_QUERY);

  const [listFiltered, setListFiltered] = useState(programList.programs.programs)

  useEffect(() => {
    if(ouSelected){
      refetch({ouSelected}).then(result => {
        setListFiltered(programList.programs.programs.filter(ou=>result.programsOU.programs.some((a)=>a.id == ou.id)))
      })
      
    }
  }, [ouSelected])

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
      listFiltered && (
        <SingleSelect>
          {listFiltered.map(({ id, displayName }) => (
            <SingleSelectOption key={id} label={displayName} value={id} />
          ))}
        </SingleSelect>
      )}
    </React.Fragment>
  );
};
