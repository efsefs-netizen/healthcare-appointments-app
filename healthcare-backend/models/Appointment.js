const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  id: { type: Number, unique: true, sparse: true }, // keep your existing id style
  doctorId: Number,
  doctorName: String,
  patientName: String,
  appointmentDate: String,
  appointmentTime: String,
  status: { type: String, default: 'confirmed' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
