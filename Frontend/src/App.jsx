import React from 'react'
import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Navigate ,Route,Routes} from "react-router-dom";
import Signup from "./components/Signup";
import toast, { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider";
import Contact from "./contact/Contact";


const App = () => {
  const [authUser, setAuthUser] = useAuth(null);
  console.log(authUser)

  return (
    <>
  {/*<Home/>
  <Course/>*/}
   <div className="dark:bg-slate-900 dark:text-white">
<Routes >
  <Route  path= "/" element={<Home/>}/>
  <Route  path= "/course" element={ <Courses/>}/>
  <Route  path= "/contact" element={ <Contact/>}/>
  <Route  path= "/signup" element={<Signup/>}/>
</Routes>
<Toaster />
</div>
  </>
  )
}

export default App