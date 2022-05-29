
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
      {/* This is the alias of BrowserRouter i.e. Router */}
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route path="/" element={<Home/>} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
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