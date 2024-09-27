import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const [inp, setInp] = useState('test');

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(inp);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval)
  //   };
 
  // },[inp]);

  // useEffect(() => {
  //   return () => {
  //     console.log("es el chkam");
  //   };
  // },[inp]);


  const goToProfile = () => {
    navigate('/about');
  };

  return (
    <div>
      <h1>Home</h1>
        <input type="text" onChange={(e) => { setInp(e.target.value)}} value={inp} />
        <button onClick={() => goToProfile()}>aaaaa</button>
      <p>Добро пожаловать Home</p>
    </div>
  );
};

export default Home;