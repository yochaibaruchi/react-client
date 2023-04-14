import './App.css';
import socket from './utilities/socketConnection';
import { useEffect, useState } from 'react'
import Widget from './Widget';
function App() {
  const [perfData, setPerfData] = useState({})
  useEffect(() => {
    socket.on('data', (data) => {
      console.log(data);
      setPerfData((correntData) => correntData[data.macA] = data)
    })
  }, [])
  return (
    <div className='app'>
      <Widget />
    </div>
  );
}

export default App;
