import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const About = () => {
  const navigate  = useNavigate()
  const [color, setColor] = useState(localStorage.getItem('color'))
  const [inp, setInp] = useState('')

  const goToProfile = () => {
    navigate('/');
  };

  const params = useParams();
  console.log(params);
  

  const users = [
    {
      name: "Gago",
      age: "27",
      id: "1"
    }, 
    {
      name: "Rubo",
      age: "21",
      id: "2"
    },
    {
      name: "Sona",
      age: "18",
      id: "3"
    }
  ];




  function find(id) {
    return users.find((user) => {
      return user.id == id 
    });
  }
  
  const changeTem = () => {
    console.log(find('100000' && true));
    // setColor(inp)
    // localStorage.setItem('color', inp);
  };



















  return (
    <div>
      {/* <h1 style={{color: color}}>About</h1>
      <input type="text" onChange={(e)=> {setInp(e.target.value)}} value={inp}/>
      <button onClick={() => changeTem()}>Change Tem</button>
      <button onClick={() => goToProfile()}>Go Home</button>
      <p>Добро пожаловать About</p>
       */}
    <button onClick={() => changeTem()}>Change Tem</button>
       {
        users.map((user, index) => {
          return (
            <div key={index}>
                {user.name + " " + user.age}
            </div>
          );
        })
       }
    </div>
  );
};

export default About;