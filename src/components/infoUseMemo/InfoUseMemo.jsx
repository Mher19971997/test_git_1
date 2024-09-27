import React, { useState, useMemo } from 'react';

function Parent() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // const nonMemoizedCalculation = (() => {
    
  //   console.log('Выполняется НЕ мемоизированное вычисление');
  //   let result = 0;
  //   for (let i = 0; i < 1000000000; i++) {
  //     result += i;
  //   }
  //   return result;
  // })();

  const memoizedCalculation = useMemo(() => {
    console.log('Выполняется МЕМоизированное вычисление');
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  return (
    <div>
      <p>Счётчик: {count}</p>
      <p>Результат НЕ мемоизированного вычисления: {memoizedCalculation}</p>
      {/* <p>Результат мемоизированного вычисления: {memoizedCalculation}</p> */}

      <button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите текст"
      />
    </div>
  );
}

export default Parent;
