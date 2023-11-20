import React from 'react';


function Patient() {
const nestedData = [
    [
      {
        "username": "UserA",
        "agendaID": "AgendaA_ID",
        "patients": [
          {
            "patientID": "PatientX_ID",
            "patientID64": "PatientX_ID64"
          },
          {
            "patientID": "PatientY_ID",
            "patientID64": "PatientY_ID64"
          },
        ]
      },
      {
        "username": "UserB",
        "agendaID": "AgendaB_ID",
        "patients": [
          {
            "patientID": "PatientZ_ID",
            "patientID64": "PatientZ_ID64"
          },
        ]
      },
    ],
    [
      {
        "username": "UserC",
        "agendaID": "AgendaC_ID",
        "patients": [
          {
            "patientID": "PatientC_ID",
            "patientID64": "PatientC_ID64"
          },
        ]
      }
    ]
  ];
  

  return (
    <div>
      {nestedData.map(innerArray => (
        <div>
          {innerArray.map(item => (
            <div>
              <h3>{item.username}</h3>
              <p>Agenda ID: {item.agendaID}</p>
              <ul>
                {item.patients.map(patient => (
                  <li>
                    Patient ID: {patient.patientID}, Patient ID64: {patient.patientID64}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

  export default Patient;