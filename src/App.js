import "./App.css";
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Emptypage from "./component/Emptypage";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";

function App() {
  
  return (
    <BrowserRouter>
      <div>
        <Header />

        <Routes>
          {/** url에 따라 태그 안 내용이 달라짐 */}
          <Route exact path="/" element={<DayList />}/>

          <Route path="/day/:day" element={<Day />}/>

          <Route path="/create_word" element={<CreateWord />}/>

          <Route path="/create_day" element={<CreateDay />} />

          <Route element={<Emptypage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
