const makeAppointment = async (appointmentDetails) => {
    try{
        const apiUrl = process.env.REACT_APP_API_URL || 'https://healthcare-appointments-app.onrender.com';
        const response =  await fetch(`${apiUrl}/api/book-appointment`,{
        method:'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(appointmentDetails)
});
        if(!response.ok){
            throw new Error("Failed to make appointment");
        }

    }catch(error){
        console.error("Error coming:", error);
        throw error;
    }


}

export default makeAppointment;