# DHIS2 Videoconference

This is a work in progress, so most of the features here listed will be getting added soon

## Concept

This app integrates DHIS2 HISP and analytics with WebRTC (Jitsi) features.
The idea behind this app is to create an appointment system which would
allows a doctor to create a new patient and to start a videoconference with him using the TEI id for the Jitsi Room id.

The final behaviour of the app should allow the doctor to send an email or sms
to the patient with the details of his/her appointment like the day and time
of the appointment and the link to jitsi to connect with the doctor.

Another feature would allow import/export patient info to integrate different HISP systems which are working nowadays in spanish Health Facilities. The import should use csv format but adapted to what DHIS2 understands and the export should be csv but adapted to what the actual spanish HISPs understands.

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
