import { useRef } from 'react';
import { Button, Input } from 'antd';

export default function () {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <style>{`
        .ref-input {
          width: 50%;
          margin: 10px 0;
        }
      `}</style>
      <h2>Ref Hooks</h2>
      <Input className='ref-input' ref={inputEl} type='text' />
      <Button onClick={onButtonClick}>Focus the input</Button>
    </>
  );
}