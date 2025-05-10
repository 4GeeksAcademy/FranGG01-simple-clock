import { useState } from 'react';
import './Home.css';
import { useEffect } from 'react';

function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };
  return (
    <>
    <div className="container">
      <div className="clock">
        <div className="clock-time">{formatTime(time)}</div>
      </div>
      </div>
    </>
  );
}

export default App;
