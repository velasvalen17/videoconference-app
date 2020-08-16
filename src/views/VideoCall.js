import React from "react";
import { JitsiLibrary } from "../components";

export const VideoCall = () => {
  return (
    <React.Fragment>
      <h1>VideoCall</h1>
      <JitsiLibrary />
      <div>
        <p>Iframe is placed below</p>
      </div>
    </React.Fragment>
  );
};
