# DHIS2 Videoconference

  This is a work in progress, so features here listed will be getting added soon

## Concept

This app integrates DHIS2 HISP and analytics with WebRTC (Jitsi) features.

## Definition

The app uses BrowserRouter to navigate through different sections of a side bar:

- Home
- Patients
- VideoCall
- Statistics

### Home

Initial view of the app. Here is where the instructions of how to use the app will be placed.

### Patients

Here is where the user can select the DHIS2 tracker program. Once the program is selected a list of patients (TEIs) related with the program will appear.

#### Methods

- Register patient
- Delete patient
- Make an appointment for the patient
- Call patient

### VideoCall

Here is where de Jitsi iFrame will appear. The form related to the program and the patient selected will appear below the iFrame. It will allow the user to fill the form while the videocall is running.

#### Methods

- Submit form

### Statistics

Here is where the statistics of the calls of a patient and a group of patients should appear.

#### Methods

- Select patient or group of patients and show their statistics
