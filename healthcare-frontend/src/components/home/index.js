import { Link } from 'react-router-dom';
import Header from '../header';
import './index.css';

const Home = () => {
  return (
    <div className="home-container container">
      <Header />

      <div className="top-section text-center py-5">
        <h1 className="display-5 fw-bold mb-3">Healthcare App</h1>
        <p className="lead text-muted mb-4">
          Your trusted partner in booking medical appointments with top doctors.
          Check availability instantly and consult without the wait.
        </p>

        <div className="middle-section d-flex flex-column flex-md-row justify-content-center gap-3">
          <Link to="/doctors">
            <button type="button" className="btn btn-primary view-all-doctors-button">
              View All Doctors
            </button>
          </Link>
          <Link to="/my-Appointments">
            <button type="button" className="btn btn-outline-primary book-appointment-button">
              My Appointments
            </button>
          </Link>
        </div>
      </div>

      <div className="why-choose-us-section py-4">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <ul className="list-unstyled text-center why-list">
          <li>⏱️ Fast and easy doctor appointment booking</li>
          <li>📅 Real-time availability check</li>
          <li>👨‍⚕️ Access to verified and experienced doctors</li>
          <li>📍 Find doctors near your location</li>
          <li>💬 Reminders and notifications</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
