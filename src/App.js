import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import { Navigation } from "./components/Navbar";
import { TodoContainer } from "./components/TodoContainer";
import { About } from "./components/About";

function App() {
  return (
    <div className="App">
      <Navigation title="ToDo List" searchBar={false} />
      <Router>
        <Routes>
          <Route exact path="/" element={
            <TodoContainer />}>
          </Route>
          <Route exact path="/about" element={
            <About />}>
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
