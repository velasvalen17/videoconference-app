import React, { useState, useEffect } from 'react';

export const VideoCall = () => {
  const [loading, setLoading] = useState(true);
  const containerStyle = {
    width: '800px',
    height: '400px',
  };

  const jitsiContainerStyle = {
    display: (loading ? 'none' : 'block'),
    width: '100%',
    height: '100%',
  }

 function startConference() {
  try {
   const domain = 'meet.jit.si';
   const options = {
    roomName: 'roomName',
    height: 400,
    parentNode: document.getElementById("root"),
   };

   const api = new JitsiMeetExternalAPI(domain, options);
   api.addEventListener('videoConferenceJoined', () => {
    console.log('Local User Joined');
    setLoading(false);
    api.executeCommand('displayName', 'MyName');
   });
  } catch (error) {
   console.error('Failed to load Jitsi API', error);
  }
 }

 useEffect(() => {
  // verify the JitsiMeetExternalAPI constructor is added to the global..
  if (window.JitsiMeetExternalAPI) startConference();
  else alert('Jitsi Meet API script not loaded');
 }, []);

 return (
  <React.Fragment>
    <h1>VideoCall</h1>
    <div
   style={containerStyle}
  >
  {loading && "Loading..."}
   <div
    id="jitsi-container"
    style={jitsiContainerStyle}
   />
  </div>
  <div>
    <p>
      Iframe is placed below
    </p>
  </div>
  </React.Fragment>
 );
}
