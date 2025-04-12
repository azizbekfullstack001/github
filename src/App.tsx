import { Routes,Route } from "react-router-dom";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { useState } from "react";
function App() {
  const [inp,setInp] = useState([])
  function handleClick(data){
    setInp(data)
  }
  return (
  <div>
<Admin handleClick={handleClick}/>
 <Profile handleClick={inp}/>
  </div>
  );
}
export default App;