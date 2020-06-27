import React from "react";
import { SingleSelect, SingleSelectOption } from "@dhis2/ui";

export const Patients = () => (
  <div>
    <h1>Patients</h1>
    <p> Select a tracker program from the list: </p>
    <SingleSelect>
      <SingleSelectOption label="option one" />
      <SingleSelectOption label="option two" />
      <SingleSelectOption label="option three" />
      <SingleSelectOption label="option four" />
    </SingleSelect>
  </div>
);
