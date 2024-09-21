import './App.css';
import AppRoutes from './routes/AppRoutes';
import MainLayouts from './layouts/MainLayouts';


const  App = ({count}) => {

  

  return (
    <div className="App">
      <div className='test'>

      </div>
      <MainLayouts>
        <AppRoutes />
      </MainLayouts>
    </div>
  );
}

export default App;
