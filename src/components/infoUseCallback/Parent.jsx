import React, { useState, useCallback } from 'react';

// Компонент Child, который будет получать функцию через пропс и рендериться при её изменении
const Child = React.memo(({ handleClick, name, count }) => {
  console.log(`${name} компонент отрендерился`);
  return <button onClick={handleClick}>{name} Кнопка</button>;
});


function Parent() {
  const [count, setCount] = useState(0);

  // Обычная функция (не мемоизированная), которая будет пересоздаваться при каждом рендере
  const handleClickRegular = () => {
    console.log('Обычная кнопка нажата');
  };

  // Мемоизированная функция с использованием useCallback
  const handleClickMemoized = useCallback(() => {
    console.log('Мемоизированная кнопка нажата');
  }, []); // Пустой массив зависимостей — функция будет мемоизирована и не пересоздаваться

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>Увеличить счётчик</button>

      {/* Первый Child с обычной функцией */}
      <Child handleClick={handleClickRegular} name="Обычная" count={count}/>

      {/* Второй Child с мемоизированной функцией */}
      <Child handleClick={handleClickMemoized} name="Мемоизированная" count={count}/>
    </div>
  );
}

export default Parent;