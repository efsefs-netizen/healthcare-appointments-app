const makeAppointment = async (appointmentDetails) => {
    try{
        const response =  await fetch('https://healthcare-appointments-app.onrender.com/book-appointment',{
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