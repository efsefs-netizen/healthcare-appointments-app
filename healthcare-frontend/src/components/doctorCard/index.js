import './index.css';
import { Link } from 'react-router-dom';

const DoctorCard = (props) => {
  const { doctor } = props;

  return (
    <div className="card doctor-card">
      <img src={doctor.image} className="card-img-top doctor-img" alt={doctor.name} />
      <div className="card-body">
        <h5 className="card-title">{doctor.name}</h5>
        <p className="card-text">{doctor.specialization}</p>
        <p className="card-text">{doctor.availability}</p>
        <Link to={`/book-appointment/${doctor.id}`}>
          <button className="btn btn-success book-btn">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
