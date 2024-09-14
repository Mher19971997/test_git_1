import { useState } from 'react';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import MainLayouts from './layouts/MainLayouts';

const  App = () => {
  const [text, setText] = useState(1)
  return (
    <div className="App">
      <MainLayouts>
        <AppRoutes />
      </MainLayouts>
    </div>
  );
}

export default App;
