import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout/layout";
import Home from "./pages/Home/Home";
import Friends from "./pages/Friends/Friends";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import MyProfile from "./pages/MyProfile/MyProfile";
import '../src/styles/style.scss'
import './utils/i18n'
function App() {

  return (
    <Suspense  fallback={'...Loading'} >
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='friends' element={<Friends/>}/>
          <Route path='register' element={<Register/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='myprofile' element={<MyProfile/>}/>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
