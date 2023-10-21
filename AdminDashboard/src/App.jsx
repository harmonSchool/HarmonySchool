import { BrowserRouter, Routes, Route } from "react-router-dom";

import SideBar from './component/SideBar/SideBar'
import Login from './component/Login/Login';
import SearchBar from './component/SearchBar/SearchBar';
import AllStudent from './component/AllStudent/AllStudent';
import AllParentData from "./component/AllParentData/AllParentData";
import Home from "./component/Home/Home";
import Profile from "./component/Profile/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Sidebar" element={<> <SideBar/>  <SearchBar/>   </>} />
      <Route path="/Home" element={<> <SideBar/>  <SearchBar/>  <Home/> </>} />
      <Route path="/AllStudent" element={  <> <SideBar/>  <SearchBar/>   <AllStudent/>  </>    } />
      <Route path="/AllParentData" element={  <> <SideBar/>  <SearchBar/>   < AllParentData/>  </>    } />
      <Route path="/Profile" element={  <> <SideBar/>  <SearchBar/>   <Profile/>  </>    } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
