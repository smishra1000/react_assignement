import { useState, useRef, useEffect } from "react"
const App = () => {
  const [count, setCount] = useState(0);
  const timerIdRef = useRef(null);
 
 
  const onStart = () => {
     timerIdRef.current = setInterval(() => {
     setCount((prevCount) => prevCount + 1);
     }, 1000);
  };
 
  const onStop = () => {
      clearInterval(timerIdRef.current);
  };
 
 
  return(
     <div className="box">
       <h1>Count: {count}</h1>
       <button onClick={onStart}>Start</button>
       <button onClick={onStop}>Stop</button>
     </div>
  );
}
