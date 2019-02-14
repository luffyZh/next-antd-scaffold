import { useState, useEffect } from 'react';
import { Button } from 'antd';

export default function () {
  // Declare a new state variable, which we'll call "count" and intital value is 0
  const [count, setCount] = useState(0);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
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
      <span className='text'>You clicked {count} times</span>
      <Button onClick={() => setCount(() => count + 1 > 5 ? 5 : count + 1)} type='primary'>
        Click me
      </Button>
    </div>
  );
}