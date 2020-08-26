import React, { useEffect } from "react";
import { useDataMutation, useDataQuery } from "@dhis2/app-runtime";

const query = {
  trackedEntityInstances: {
    resource: "trackedEntityInstances",
    params: ({ programSelected, ouSelected }) => ({
      program: programSelected,
      ou: ouSelected,
    }),
  },
};

export const Form = ({ programSelected, ouSelected }) => {
  const { loading, error, data, refetch } = useDataQuery(query, {
    variables: {
      programSelected,
      ouSelected,
    },
    onComplete: (data) => console.log(data),
  });

  useEffect(() => {
    refetch({ programSelected, ouSelected });
  }, [programSelected]);

  return (
    <>
      {loading && <span>...</span>}
      {error && <span>{`ERROR: ${error.message}`}</span>}
      {data && <span>Teis are loaded!</span>}
    </>
  );
};
