import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import MainLayouts from "./layouts/MainLayouts";
import DemoComponent from "./components/infoUseLayoutEffect/InfoUseLayoutEffect";
import Parent from "./components/infoUseRef/InfoUseRef";
// import Parent from "./components/infoUseMemo/InfoUseMemo";
// import Parent from "./components/infoUseCallback/Parent";

const App = ({ count }) => {
  return (
    <div className="App">
      <div className="test">
        <Parent />
      </div>
      {/* <MainLayouts>
        <AppRoutes />
      </MainLayouts> */}
    </div>
  );
};

export default App;
