const getAppointments = async () => {
    let response = await fetch('https://healthcare-appointments-app.onrender.com/my-appointments')
    let data = await response.json();
    return data;
}

export default getAppointments;

