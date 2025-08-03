import { Component } from "react";
import getAppointments from "../../services/getAppointmentsApi";    
import './index.css';
import Header from "../header";

class MyAppointmentsPage extends Component {
    state = { appointments: [] };

    async componentDidMount() {
        let appointments = await getAppointments();
        this.setState({ appointments });
    }

    render() {
        const { appointments } = this.state;

        return (
            <div className="appointments-container container py-4">
                <Header />
                <h1 className="appointments-heading text-center mb-4">My Appointments</h1>

                {appointments.length === 0 ? (
                    <p className="no-appointments-text text-center text-muted">
                        No Appointments available
                    </p>
                ) : (
                    <ul className="appointments-list row gy-4">
                        {appointments.map(appointment => (
                            <li key={appointment.id} className="appointment-item col-12 col-md-6">
                                <div className="card shadow-sm p-3">
                                    <h5 className="doctor-name fw-bold mb-2">
                                        Doctor: {appointment.doctorName}
                                    </h5>
                                    <p className="patient-name mb-1">Patient: {appointment.patientName}</p>
                                    <p className="appointment-date mb-1">Date: {appointment.appointmentDate}</p>
                                    <p className="appointment-time mb-0">Time: {appointment.appointmentTime}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default MyAppointmentsPage;
