// Core
import { useEffect, useState } from 'react';

// Components
import { Header } from '../../components/Header';

// Containers
import { OrderContainer } from '../OrderContainer';

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
 
  return (
    <div className="App">
      <Header />
      <OrderContainer />
    </div>
  );
}

export default App;
