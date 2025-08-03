const getAppointments = async () => {
    let response = await fetch('http://localhost:3001/fetch-appointments')
    let data = await response.json();
    return data;
}

export default getAppointments;