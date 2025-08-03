import { Component } from "react";
import { useParams,useNavigate } from "react-router-dom";
import getDoctorInfo from "../../services/getDoctorInfoApi"; 
import makeAppointment from "../../services/makeAppointmentApi";
import Header from "../header";
import './index.css'; 

class BookAppointment extends Component {
    state = {
        doctorId: null,
        doctorData: [],
        patientName: '',
        appointmentDate: '',
        appointmentTime: ''
    };

    async componentDidMount() {
        const { doctorId } = this.props;
        this.setState({ doctorId });

        const doctorData = await getDoctorInfo(doctorId);
        this.setState({ doctorData });
    }

    onPatientNameChange = (event) => {
        this.setState({ patientName: event.target.value });
    }

    onDateChange = (event) => {
        this.setState({ appointmentDate: event.target.value });
    }

    onTimeChange = (event) => {
        this.setState({ appointmentTime: event.target.value });
    }

    onFormSubmit = async (event) => {
        event.preventDefault();
        const { patientName, appointmentDate, appointmentTime, doctorData } = this.state;

        const appointmentDetails = {
            doctorId: doctorData.id,
            doctorName: doctorData.name,
            patientName,
            appointmentDate,
            appointmentTime
        };

        try {
            await makeAppointment(appointmentDetails);
            alert("Appointment confirmed successfully!");
            this.props.navigate('/my-Appointments');
        } catch (error) {
            alert("Failed to confirm appointment. Please try again later.");
        }
    }

    render() {
        const { doctorData } = this.state;

        return (
            <div className="book-appointment-container">
                <Header/>
                <div className="book-appointment-form-wrapper">
                    <h1 className="form-heading">Book Appointment with {doctorData.name}</h1>
                    <form onSubmit={this.onFormSubmit} className="appointment-form">
                        <div className="form-group">
                            <label htmlFor="patientName">Patient Name:</label>
                            <input
                                id="patientName"
                                type="text"
                                onChange={this.onPatientNameChange}
                                placeholder="Enter your name"
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Appointment Date:</label>
                            <input
                                id="date"
                                type="date"
                                onChange={this.onDateChange}
                                className="form-control"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="time">Appointment Time:</label>
                            <input
                                id="time"
                                type="time"
                                onChange={this.onTimeChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary confirm-button">
                            Confirm Appointment
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

function BookAppointmentWrapper(props) {
    const { doctorId } = useParams();
    const navigate = useNavigate();
    return <BookAppointment {...props} doctorId={doctorId} navigate={navigate}/>;
}

export default BookAppointmentWrapper;
