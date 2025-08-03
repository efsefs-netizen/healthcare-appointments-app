const getAppointments = async () => {
    let response = await fetch('https://healthcare-appointments-app.onrender.com/fetch-appointments')
    let data = await response.json();
    return data;
}

export default getAppointments;

