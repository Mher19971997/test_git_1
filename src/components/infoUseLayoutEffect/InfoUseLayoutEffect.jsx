import React, { useState, useEffect, useLayoutEffect } from 'react';

const DemoComponent = () => {
  const [layoutEffectText, setLayoutEffectText] = useState('useLayoutEffect запускается...');
  const [effectText, setEffectText] = useState('useEffect запускается...');
  const [show, setShow] = useState(false);

  // useLayoutEffect (меняем текст до отрисовки)
  useLayoutEffect(() => {
    setLayoutEffectText('useLayoutEffect: Я появился первым!');
    console.log('useLayoutEffect: Выполнено');
  }, [show]);

  // useEffect (меняем текст после отрисовки)
  useEffect(() => {
    setEffectText('useEffect: Я появился с задержкой!');
    console.log('useEffect: Выполнено');
  }, [show]);

  return (
    <div>
      <button onClick={() => setShow((prev) => !prev)}>
        Показать эффекты
      </button>
      <div style={{ marginTop: '20px', fontSize: '20px' }}>
        <div style={{ color: 'green', transition: 'opacity 1s', opacity: show ? 1 : 0 }}>
          {layoutEffectText}
        </div>
        <div style={{ color: 'blue', transition: 'opacity 1s', opacity: show ? 1 : 0 }}>
          {effectText}
        </div>
      </div>
    </div>
  );
};
export default DemoComponent;
