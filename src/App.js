import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emptypage from "./component/Emptypage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          {/** url에 따라 태그 안 내용이 달라짐 */}
          <Route exact path="/" element={<DayList />}/>

          <Route path="/day/:day" element={<Day />}/>

          <Route element={<Emptypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
