import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { LoginPage } from "../pages/LoginPage"
import { PublicRoutes }  from "./PublicRoutes"
import { PrivateRoutes }  from "./PrivateRoutes"
import Main from "../Main";

type Status = 'checking' | 'authenticated' | 'no-authenticated'

let status: Status = 'no-authenticated'

export const AppRouter = () => {
    return (      
            <Routes>
                {/* <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/feria' element={<Main />} />
                <Route path='*' element={<Navigate to='/login' replace />} /> */}
                {
                    status === 'authenticated'
                        ? <Route path="/*" element={<PrivateRoutes />} />
                        : <Route path="/*" element={<PublicRoutes />} />
                }

                {/* <Route path='*' element={<Navigate to='/login' replace />} /> */}

            </Routes>

            
    )
}