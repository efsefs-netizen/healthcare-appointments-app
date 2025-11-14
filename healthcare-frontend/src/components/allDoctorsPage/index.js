import { Component } from 'react';
import DoctorCard from '../doctorCard';
import getDoctors from '../../services/getDoctorsApi';
import Header from '../header';
import Loader from '../loader';

import './index.css'; 

class GetDoctorsPage extends Component {
  state = { doctorsList: [], isLoading: true };

  componentDidMount() {
    getDoctors().then(doctors => {
      this.setState({ doctorsList: doctors, isLoading: false });
    });
  }

  render() {
    const { doctorsList, isLoading } = this.state;

    if (isLoading) {
      return <Loader />;
    }

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
