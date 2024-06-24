import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";
import Feed from "./pages/feed/Feed";
import Create from "./pages/create/Create";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employer">
          <Route path="/employer/dashboard" element={<Dashboard />} />
          <Route path="/employer/create" element={<Create />} />
        </Route>
        <Route path="/employee/feed" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
