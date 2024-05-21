import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import User from "./components/User";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<User></User>}></Route>
          <Route exact path="/form" element={<Form></Form>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
