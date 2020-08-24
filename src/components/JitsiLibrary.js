import React, { useState, useEffect, useRef } from "react";

export const JitsiLibrary = () => {
  const [loading, setLoading] = useState(true);
  const iframeRef = useRef("jitsi-container");
  const containerStyle = {
    width: "800px",
    height: "400px",
  };

  function startConference() {
    try {
      const domain = "meet.jit.si";
      const options = {
        roomName: "roomNameTestDHIS2",
        height: 400,
        parentNode: iframeRef.current,
      };

      const api = new JitsiMeetExternalAPI(domain, options);
      api.addEventListener("videoConferenceJoined", () => {
        console.log("Local User Joined");
        setLoading(false);
        api.executeCommand("displayName", "MyName");
      });
    } catch (error) {
      console.error("Failed to load Jitsi API", error);
    }
  }

  useEffect(() => {
    // verify the JitsiMeetExternalAPI constructor is added to the global..
    if (window.JitsiMeetExternalAPI) startConference();
    else alert("Jitsi Meet API script not loaded");
  }, []);

  return (
    <React.Fragment>
      <div ref={iframeRef} style={containerStyle}></div>
    </React.Fragment>
  );
};
