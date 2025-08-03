const getDoctorInfo = async (doctorId) =>{
    //console.log(doctorId);
    const response = await fetch(`https://healthcare-appointments-app.onrender.com/${doctorId}`)
    const data = await response.json();
    //console.log(data);
    return data;
}

export default getDoctorInfo;