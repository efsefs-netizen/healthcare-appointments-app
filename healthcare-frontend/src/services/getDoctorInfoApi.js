const getDoctorInfo = async (doctorId) =>{
    //console.log(doctorId);
    const response = await fetch(`http://localhost:3001/fetch-doctor-info/${doctorId}`)
    const data = await response.json();
    //console.log(data);
    return data;
}

export default getDoctorInfo;