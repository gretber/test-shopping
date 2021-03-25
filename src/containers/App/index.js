// Core
import { useEffect, useState } from 'react';
// Components
import { Header } from '../../components/Header';

function App() {
  const [ coordinates, setCoordinates ] = useState({});

  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const receivedCoords = {
          lat: coords.latitude,
          lon: coords.longitude,
        }
        setCoordinates(receivedCoords)
      })
    } else {
      console.log('rejected')
    }
  },[])
  console.log(coordinates)
const handlerClick = () => {

  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      console.log(coords)
    })
  } else {
    console.log('rejected')
  }
}

 
  return (
    <div className="App">
      <Header />
      <button onClick={handlerClick}>get geo</button>
    </div>
  );
}

export default App;
