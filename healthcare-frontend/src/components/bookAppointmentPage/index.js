import { Component } from "react";
import { useParams, useNavigate } from "react-router-dom";
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
    appointmentTime: '',
    errors: {
      patientName: false,
      appointmentDate: false,
      appointmentTime: false,
    },
  };

  async componentDidMount() {
    const { doctorId } = this.props;
    this.setState({ doctorId });

    const doctorData = await getDoctorInfo(doctorId);
    this.setState({ doctorData });
  }

  onPatientNameChange = (event) => {
    const value = event.target.value;
    this.setState(prevState => ({
      patientName: value,
      errors: { ...prevState.errors, patientName: value.trim() === '' }
    }));
  };

  onDateChange = (event) => {
    const value = event.target.value;
    this.setState(prevState => ({
      appointmentDate: value,
      errors: { ...prevState.errors, appointmentDate: value.trim() === '' }
    }));
  };

  onTimeChange = (event) => {
    const value = event.target.value;
    this.setState(prevState => ({
      appointmentTime: value,
      errors: { ...prevState.errors, appointmentTime: value.trim() === '' }
    }));
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { patientName, appointmentDate, appointmentTime, doctorData } = this.state;

    const errors = {
      patientName: patientName.trim() === '',
      appointmentDate: appointmentDate.trim() === '',
      appointmentTime: appointmentTime.trim() === '',
    };

    this.setState({ errors });

    if (errors.patientName || errors.appointmentDate || errors.appointmentTime) {
      return;
    }

    const appointmentDetails = {
      doctorId: doctorData.id,
      doctorName: doctorData.name,
      patientName,
      appointmentDate,
      appointmentTime,
    };

    try {
      await makeAppointment(appointmentDetails);
      alert("Appointment confirmed successfully!");
      this.props.navigate('/my-Appointments');
    } catch (error) {
      alert("Failed to confirm appointment. Please try again later.");
    }
  };

  render() {
    const { doctorData, errors } = this.state;

    return (
      <div className="book-appointment-container">
        <Header />
        <div className="book-appointment-form-wrapper">
          <h1 className="form-heading">Book Appointment with {doctorData.name}</h1>
          <form onSubmit={this.onFormSubmit} className="appointment-form">
            <div className="form-group">
              <label htmlFor="patientName">
                Patient Name<span className="required">*</span>
              </label>
              <input
                id="patientName"
                type="text"
                onChange={this.onPatientNameChange}
                className={`form-control ${errors.patientName ? 'input-error' : ''}`}
                placeholder="Enter your name"
              />
              {errors.patientName && <small className="error-text">Patient name is required</small>}
            </div>

            <div className="form-group">
              <label htmlFor="date">
                Appointment Date<span className="required">*</span>
              </label>
              <input
                id="date"
                type="date"
                onChange={this.onDateChange}
                className={`form-control ${errors.appointmentDate ? 'input-error' : ''}`}
              />
              {errors.appointmentDate && <small className="error-text">Date is required</small>}
            </div>

            <div className="form-group">
              <label htmlFor="time">
                Appointment Time<span className="required">*</span>
              </label>
              <input
                id="time"
                type="time"
                onChange={this.onTimeChange}
                className={`form-control ${errors.appointmentTime ? 'input-error' : ''}`}
              />
              {errors.appointmentTime && <small className="error-text">Time is required</small>}
            </div>

            <button type="submit" className="btn btn-primary confirm-button">
              Confirm Appointment
            </button>
            <button
              type="button"
              className="btn btn-secondary confirm-button"
              onClick={() => this.props.navigate('/doctors')}
            >
              Go Back
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
  return <BookAppointment {...props} doctorId={doctorId} navigate={navigate} />;
}

export default BookAppointmentWrapper;
