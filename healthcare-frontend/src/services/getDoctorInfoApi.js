const getDoctorInfo = async (doctorId) =>{
    //console.log(doctorId);
    const apiUrl = process.env.REACT_APP_API_URL || 'https://healthcare-appointments-app.onrender.com';
    const response = await fetch(`${apiUrl}/api/fetch-doctor-info/${doctorId}`)
    const data = await response.json();
    //console.log(data);
    return data;
}

export default getDoctorInfo;