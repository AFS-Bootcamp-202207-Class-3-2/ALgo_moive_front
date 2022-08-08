import "./App.css";
import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>+
    </div>
  );
}

export default App;
