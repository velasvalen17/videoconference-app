import React, { useState } from "react";
import { OrgUnitTree, ProgramDropdown } from "../components";

export const Patients = () => {
  return (
    <React.Fragment>
      <h1>Patients</h1>
      <OrgUnitTree />
      <ProgramDropdown />
    </React.Fragment>
  );
};
