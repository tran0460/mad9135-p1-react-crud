import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main/Main";
import ListView from "./Components/ListView/ListView";
import Form from "./Components/Form/Form";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="list" element={<ListView />} />
          <Route path="new" element={<Form />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
