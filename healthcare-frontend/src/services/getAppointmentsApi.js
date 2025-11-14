const getAppointments = async () => {
    const apiUrl = process.env.REACT_APP_API_URL || 'https://healthcare-appointments-app.onrender.com';
    let response = await fetch(`${apiUrl}/api/my-appointments`)
    let data = await response.json();
    return data;
}

export default getAppointments;

