import LandingPage  from './LandingPage/LandingPage';
import Navbar  from './Navbar';
import MainComponent from './MainHomePage';
import Footer from './Footer';
import AdminsignUP from './adminSignUP/AdminSignUP';
import Adminlogin from './adminLogin/AdminLogin';
import FIRform from './FIRform/FIRform';
import FIROverviewComponent from './FIROverviewComponent/FirOverviewComponent';
import { Routes, Route } from "react-router-dom";
import { useState } from 'react';

export default function App(){
  const [ user,  setLoginUser] = useState({})


    return (
        <>

        <Routes>
        <Route  path="/"  element={<LandingPage/>} />
          <Route exact path="/FIRForm" element=
            {
                 user, user._id ? <FIRform setLoginUser={setLoginUser}/> : <Adminlogin setLoginUser={setLoginUser}/>
            } />
          <Route  path="/AdminLogin" element={<Adminlogin setLoginUser={setLoginUser}/>} />
          <Route  path="/AdminSignUP"  element={<AdminsignUP/>} />
          <Route  path="/FIRform"  element={<FIRform/>} />
          <Route  path="/FIROverviewComponent"  element={<FIROverviewComponent/>} />
        </Routes>






  {/* <LandingPage/>
         <Navbar />
    //     <MainComponent />
    //     <AdminsignUP/>
    //     <FIRform/>
    //     <Footer />
    //     <Adminlogin/>

    // <FIROverviewComponent/>*/}

    
        </>
    )
}


// function Ternary() {
//   const [ user, setLoginUser] = React.useState({})
// if(user && user.userid)
// {
//   console.log(user.userid);
// return <FIRform />
// } else{
// return <Adminlogin setLoginUser={setLoginUser}/>
// }
//
// }
