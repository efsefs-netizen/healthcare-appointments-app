    const express = require('express');
    const app = express();
    const cors = require('cors');
    app.use(cors());
    app.use(express.json());
    const fs = require('fs');
    const path = require('path');

    //just for finding doctors
    const doctors = require('./data/doctors.json');
    
    //need for accessing and storing appointments
    const appointmentsFile = path.join(__dirname, 'data', 'appointments.json'); 

    app.get('/fetch-doctors', (request, response) => {
        response.json(doctors);
    })

    app.get('/fetch-doctor-info/:doctorId', (request,response) =>{
        const doctorId = request.params.doctorId;
        const doctorData = doctors.find(doctor =>doctor.id === parseInt(doctorId));
        if(doctorData){
            response.json(doctorData);
        }else{
            response.status = 404;
            response.json({message: "Doctor not found"});
        }
    })
    
    app.post('/book-appointment', (request, response) =>{
        const {doctorId, doctorName, patientName, appointmentDate, appointmentTime} = request.body;
        const newAppointment = {
            id: Date.now(),// Unique ID for the appointment
            doctorId,
            doctorName,
            patientName,
            appointmentDate,
            appointmentTime,
            status: 'confirmed' 
        };
        let appointments = [];
        if(fs.existsSync(appointmentsFile)){
            let readAppointments = fs.readFileSync(appointmentsFile);
            appointments = JSON.parse(readAppointments);
        }
        appointments.push(newAppointment);
        fs.writeFileSync(appointmentsFile, JSON.stringify(appointments, null, 2));
        response.status(201).json({message: "Appointment confirmed successfully!"});
    })

    app.get('/fetch-appointments', (request, response) => {
        if(fs.existsSync(appointmentsFile)){
            let readAppointments = fs.readFileSync(appointmentsFile);
            let appointments = JSON.parse(readAppointments);
            response.json(appointments);    
        }
    })



    app.listen(3001, () =>{
        console.log('Server is running on port 3001');
    });