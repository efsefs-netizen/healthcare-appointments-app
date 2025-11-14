    require('dotenv').config(); // load .env file
    const express = require('express');
    const app = express();
    const cors = require('cors');
    app.use(cors());
    app.use(express.json());
    const fs = require('fs');
    const path = require('path');
    const mongoose = require('mongoose');
    const Appointment = require('./models/Appointment');

    // Connect to MongoDB Atlas
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.warn('MONGODB_URI not set in environment variables');
    } else {
      mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('✓ MongoDB Atlas connected'))
        .catch(err => console.error('✗ MongoDB connection error:', err));
    }

    //just for finding doctors
    const doctors = require('./data/doctors.json');
    
    app.get('/api/fetch-doctors', (request, response) => {
        response.json(doctors);
    })

    app.get('/api/fetch-doctor-info/:doctorId', (request,response) =>{
        const doctorId = request.params.doctorId;
        const doctorData = doctors.find(doctor =>doctor.id === parseInt(doctorId));
        if(doctorData){
            response.json(doctorData);
        }else{
            response.status = 404;
            response.json({message: "Doctor not found"});
        }
    })
    
    //need for accessing and storing appointments
    const appointmentsFile = path.join(__dirname, 'data', 'appointments.json'); 

    
    app.post('/api/book-appointment', async (request, response) => {
        try {
            const {doctorId, doctorName, patientName, appointmentDate, appointmentTime} = request.body;
            
            const newAppointment = new Appointment({
                id: Date.now(),
                doctorId,
                doctorName,
                patientName,
                appointmentDate,
                appointmentTime,
                status: 'confirmed'
            });

            await newAppointment.save();
            response.status(201).json({message: "Appointment confirmed successfully!", id: newAppointment._id});
        } catch (err) {
            console.error('Error saving appointment:', err);
            response.status(500).json({message: "Failed to save appointment"});
        }
    })

    app.get('/api/my-appointments', async (request, response) => {
        try {
            const appointments = await Appointment.find().sort({ createdAt: -1 }).lean();
            response.json(appointments);
        } catch (err) {
            console.error('Error fetching appointments:', err);
            response.status(500).json({message: "Failed to load appointments"});
        }
    })

    app.delete('/api/delete-appointment/:id', async (request, response) => {
        try {
            const appointmentId = request.params.id;
            const result = await Appointment.findByIdAndDelete(appointmentId);
            if (!result) {
                return response.status(404).json({message: "Appointment not found"});
            }
            response.json({message: "Appointment deleted successfully!"});
        } catch (err) {
            console.error('Error deleting appointment:', err);
            response.status(500).json({message: "Failed to delete appointment"});
        }
    })

    app.listen(3001, () =>{
        console.log('Server is running on port 3001');
    });