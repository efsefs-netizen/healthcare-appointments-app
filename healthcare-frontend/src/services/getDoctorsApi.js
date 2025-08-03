const getDoctors = async () =>{
    const response = await fetch('https://healthcare-appointments-app.onrender.com/fetch-doctors')
    const data = await response.json();

    return data;

}

export default getDoctors;