import React from "react";
import { Routes, Route, Router } from "react-router-dom";

import Master from "./layouts/Master";
import Home from "./views/Home";
import Login from "./views/Login";
import Register from "./views/Register";
import Dashboard from "./views/user/Dashboard";
import NotFound from "./views/NotFound";
import { Layout2  } from "./components/Layout2";
import { LoginPage } from "./pages/LoginPage";
import Main from "./Main";

export function App(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Layout2 />} >
                <Route index element={<LoginPage />} />
                <Route path="/register" element={<Register />} />
            </Route>

            <Route path="/" element={<Master />}>
                <Route  element={<Home />} />
                {/* <Route path="/login" element={<Login />} /> */}
                
                {/* Authenticated */}
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/feria" element={<Main />} />
            </Route>
            
             
        </Routes>
    );
}