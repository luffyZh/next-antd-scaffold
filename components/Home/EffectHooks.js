import { useState, useEffect } from 'react';

export default function () {
  // Declare a new state variable, which we'll call "count" and intital value is 0
  const [time, setTime] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let timer = null;
    if (time < 100) {
      // Update the document title using the browser API
      timer = setInterval(() => setTime(time + 1), 1000);
    }
    return () => clearInterval(timer);
  });

  return (
    <div className='container'>
      <style jsx>{`
        h2 {
          text-align: center;
        }
        span.text {
          margin: 0 10px;
        }
        .container {
          margin: 10px 0;
        }
      `}</style>
      <h2>Effect Hooks</h2>
      <span className='text'>The time is {time} second</span>
    </div>
  );
}