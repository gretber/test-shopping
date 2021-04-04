const fetchAddress = async (lat, lon) => {
    const url = `https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${lon}&format=json`;
    const key = process.env.REACT_APP_X_RAPIDAPI_KEY;
    const address = await fetch(url,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'x-rapidapi-key': key,
        },
    });

    return address.json();
    
}

export const getLocationAddress = (setLocationAddress) => {

    if(!navigator.geolocation){
            console.log('Geolocation is not supported by your browser')
      } else {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const lat = coords.latitude;
            const lon = coords.longitude;
            const address = fetchAddress(lat, lon, setLocationAddress);
            address.then( data => setLocationAddress(data.address) )
        }, (e)=> console.log(e.message))
      }
}