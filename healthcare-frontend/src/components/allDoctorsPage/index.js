import { Component } from 'react';
import DoctorCard from '../doctorCard';
import getDoctors from '../../services/getDoctorsApi';
import Header from '../header'; 

import './index.css'; 

class GetDoctorsPage extends Component {
  state = { doctorsList: [] };

  componentDidMount() {
    getDoctors().then(doctors => {
      this.setState({ doctorsList: doctors });
    });
  }

  render() {
    const { doctorsList } = this.state;

    return (
      <div className="doctors-container container">
        <Header />
        <div className="row doctors-row">
          {doctorsList.map(doctor => (
            <div className="col-lg-4 col-md-6 col-sm-12 doctor-col" key={doctor.id}>
              <DoctorCard doctor={doctor} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GetDoctorsPage;
