
// importing components from react-router-dom package

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  
// import Home component
import Home from "./home";
// import About component
import Entry from "./entry";
import Retrieval from "./retrieval";

  
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
            
          <Route path="/entry" element={<Entry/>} />

          <Route path="/retrieval" element={<Retrieval/>} />

          <Route path="*" element={<Navigate to="/" replace />
        
        }/>
            
        </Routes>
      </Router>
    </>
  );
}
  
export default App;