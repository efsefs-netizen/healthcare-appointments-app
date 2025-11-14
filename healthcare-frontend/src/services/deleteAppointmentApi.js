const deleteAppointment = async (appointmentId) => {
    try {
        const apiUrl = process.env.REACT_APP_API_URL || 'https://healthcare-appointments-app.onrender.com';
        const response = await fetch(`${apiUrl}/api/delete-appointment/${appointmentId}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete appointment');
        }
        const data = await response.json();
        return data;
    } catch (err) {
        console.error('Error deleting appointment:', err);
        throw err;
    }
}

export default deleteAppointment;
