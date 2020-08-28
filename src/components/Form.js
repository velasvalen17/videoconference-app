import React, { useEffect } from "react";
import { useDataQuery } from "@dhis2/app-runtime";
import {
  ButtonStrip,
  Table,
  TableBody,
  TableCell,
  TableCellHead,
  TableHead,
  TableRow,
  TableRowHead,
} from "@dhis2/ui";
import { NewTeiButton } from "./NewTeiButton";
import { EditTei } from "./EditTei";

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
    <div>
      {loading && <span>...</span>}
      {error && <span>{`ERROR: ${error.message}`}</span>}
      {data && (
        <>
          <br></br>
          <Table>
            <TableHead>
              <TableRowHead>
                <TableCellHead>TEI ID</TableCellHead>
                <TableCellHead>First name</TableCellHead>
                <TableCellHead>Last name</TableCellHead>
                <TableCellHead>
                  <ButtonStrip end>
                    <NewTeiButton refetch={refetch} />
                  </ButtonStrip>
                </TableCellHead>
              </TableRowHead>
            </TableHead>
            <TableBody>
              {data.trackedEntityInstances.trackedEntityInstances.map((tei) => (
                <TableRow key={tei.trackedEntityInstance}>
                  <TableCell>{tei.trackedEntityInstance}</TableCell>
                  {tei.attributes.map((attribute) => {
                    if (attribute.displayName === "First name") {
                      return <TableCell>{attribute.value}</TableCell>;
                    }
                  })}
                  {tei.attributes.map((attribute) => {
                    if (attribute.displayName === "Last name") {
                      return <TableCell>{attribute.value}</TableCell>;
                    }
                  })}
                  <TableCell>
                    <ButtonStrip end>
                      <EditTei
                        id={tei.trackedEntityInstance}
                        refetch={refetch}
                      />
                    </ButtonStrip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
};
