import ReactDOM from 'react-dom/client';
import { Layout } from "./components/Layout"
import { Layout2 } from "./components/Layout2"
import { AppRouter } from "./routes/AppRouter"
import Main from "./Main";
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { LoginPage } from './pages/LoginPage';

import './index.css'
import './style.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('app')).render(
    // <Main />
    
    <BrowserRouter>
        <Routes>
            {/* <Layout path='/app'>
                <AppRouter />
            </Layout> */}
            <Layout2>

                <Routes>
                    <Route path='login' element={<LoginPage />} />
                    <Route path='*' element={<Navigate to='/login' replace />} />
                </Routes>
            </Layout2>
        </Routes>
    </BrowserRouter>
);