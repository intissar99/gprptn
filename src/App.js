import { React, Suspense, useContext } from "react";
import { ContextProvider } from "./context/Context";
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Register from "./components/Register"
import LoginAdmin from "./components/Admin/LoginAdmin"
import Services from "./components/Services"
import Profile from "./components/Profile"
import Forum from "./components/Forum/Forum"
import NavUser from "./components/Navbar/Navbar"
import NavAdmin from "./components/Admin/NavAdmin"
import Sidebar from "./components/sidebar/Sidebar"
import Footer from "./components/Footer"
import Dashboard from "./components/Admin/Dashboard"
import ListUsers from "./components/Admin/ListUsers"
import ListProducts from "./components/Admin/ListProduct"
import ListReclamation from "./components/Admin/ListReclamation"
import Analytics from "./components/Admin/Analytics"

import Pricing from "./components/Pricing/Pricing"
import ForgotPass from "./components/ForgotPass"
import Login from "./components/Login"
import Log from "./components/log/Log"
import Home from "./pages/Home"
import Products from "./components/Products/Products"
import Contact from "./pages/Contact";
import { GlobalStyle } from './globalStyles';
import { Context } from "./context/Context";

function App() {
  const { user } = useContext(Context);
  const { admin } = useContext(Context);

  return (
    <ContextProvider >
      <BrowserRouter>
        <Suspense fallback={null}>
          <GlobalStyle />
          {user || !admin ?
            <NavUser />
            :
            <>
              <div className={""}  >
                <NavAdmin admin={admin[0]} />
              </div>
              <div className={""} >
                <Sidebar />
              </div>
            </>

          }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/pricing" element={<Pricing user={user} admin={admin} />} />
            {!user && !admin ?
              <>
                <Route path="/Login" element={<Log />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/ForgotPass" element={<ForgotPass />} />
                <Route path="/Services" element={<Services />} />
                <Route path="/Products" element={<Products user={user} />} />
              </>
              :
              <Route path="/Profile" element={<Profile user={user} />} />
            }

            {admin ? <>
              <Route path="/Dashboard" element={<Dashboard admin={admin} />} />
              <Route path="/ListReclamation" element={<ListReclamation admin={admin} />} />
              <Route path="/ListUsers" element={<ListUsers admin={admin} />} />
              <Route path="/Analytics" element={<Analytics admin={admin} />} />
              <Route path="/ListProduct" element={<ListProducts admin={admin} />} />
            </>
              :
              <Route path="/Loginadmin" element={<LoginAdmin />} />
            }
            <Route element={<Footer admin={admin} />} />
            {/* <Route path="/Loginad" element={<Loginad />} /> */}
            <Route path="/Forum" element={<Forum user={user} />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ContextProvider >
  );
}

export default App;
