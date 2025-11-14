import { Component } from "react";
import getAppointments from "../../services/getAppointmentsApi";    
import './index.css';
import Header from "../header";
import Loader from "../loader";

class MyAppointmentsPage extends Component {
    state = { appointments: [], isLoading: true };

    async componentDidMount() {
        let appointments = await getAppointments();
        this.setState({ appointments, isLoading: false });
    }

    deleteAppointment = async (appointmentId) => {
        if (window.confirm("Are you sure you want to delete this appointment?")) {
            try {
                const response = await fetch(`/api/delete-appointment/${appointmentId}`, {
                    method: 'DELETE'
                });
                if (!response.ok) {
                    throw new Error('Failed to delete appointment');
                }
                // Remove from state after successful deletion
                this.setState(prevState => ({
                    appointments: prevState.appointments.filter(apt => apt._id !== appointmentId)
                }));
                alert('Appointment deleted successfully!');
            } catch (err) {
                console.error('Error deleting appointment:', err);
                alert('Failed to delete appointment. Please try again.');
            }
        }
    }

    render() {
        const { appointments, isLoading } = this.state;

        if (isLoading) {
            return <Loader />;
        }

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
                            <li key={appointment._id} className="appointment-item col-12 col-md-6">
                                <div className="card shadow-sm p-3">
                                    <h5 className="doctor-name fw-bold mb-2">
                                        Doctor: {appointment.doctorName}
                                    </h5>
                                    <p className="patient-name mb-1">Patient: {appointment.patientName}</p>
                                    <p className="appointment-date mb-1">Date: {appointment.appointmentDate}</p>
                                    <p className="appointment-time mb-1">Time: {appointment.appointmentTime}</p>
                                    <button 
                                        className="btn btn-danger btn-sm mt-2 btn-width"
                                        onClick={() => this.deleteAppointment(appointment._id)}
                                    >
                                        Delete Appointment
                                    </button>
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
