const getDoctors = async () =>{
    const response = await fetch('http://localhost:3001/fetch-doctors')
    const data = await response.json();

    return data;

}

export default getDoctors;