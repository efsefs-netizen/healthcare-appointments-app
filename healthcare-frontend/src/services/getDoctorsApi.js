const getDoctors = async () =>{
    const apiUrl = process.env.REACT_APP_API_URL || 'https://healthcare-appointments-app.onrender.com';
    const response = await fetch(`${apiUrl}/api/fetch-doctors`)
    const data = await response.json();

    return data;

}

export default getDoctors;