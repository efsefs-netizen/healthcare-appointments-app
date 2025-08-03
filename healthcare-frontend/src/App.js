import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Home from './components/home';
import GetDoctorsPage from './components/allDoctorsPage';
import MyAppointmentsPage from './components/myAppointmentsPage';
import BookAppointment from './components/bookAppointmentPage';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/doctors' element={<GetDoctorsPage/>} />
        <Route exact path='/book-appointment/:doctorId' element={<BookAppointment/>} />
        <Route exact path='/my-Appointments' element={<MyAppointmentsPage/>} />

      </Routes>
    </Router>
  )
}

export default App;
