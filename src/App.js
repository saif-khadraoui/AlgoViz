import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Main from "./pages/main/Main";
import Sorting from "./pages/sorting/Sorting";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/sorting" element={<Sorting />}/>
      </Routes>
    </Router>
      
    </>
  );
}

export default App;
