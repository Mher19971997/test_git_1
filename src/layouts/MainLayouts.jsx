import React, {useState} from 'react';

import Footer from './Footer';
import Header from './Header';
import cn from 'classnames';

import Style from './Main.module.css'

const MainLayouts = ({children}) => {
  const [isActive, setIsActive] = useState(false)
  const [count, setCount] = useState(10)

  const foo = () => {
    setCount("katu")
  }

  return ( 
    <div className='main'>
      <button onClick={() => foo()}> activ </button>
      <div className={cn(Style.test, { [Style.active]: isActive })}>
          {count}
      </div>
      <Header />
        {children}
      <Footer />
    </div>
  );
};

export default MainLayouts;