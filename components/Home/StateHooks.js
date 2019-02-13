import { useState } from 'react';
import { Button } from 'antd';

const StateHooks = () => {
  // Declare a new state variable, which we'll call "count" and intital value is 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <style jsx>{`
        h2 {
          text-align: center;
        }
        span.text {
          margin: 0 10px;
        }
      `}</style>
      <h2>State Hooks</h2>
      <span className='text'>You clicked {count} times</span>
      <Button onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
};

export default StateHooks;