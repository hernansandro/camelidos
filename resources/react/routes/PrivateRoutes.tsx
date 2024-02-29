import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import Main from "../Main";

export const PrivateRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/feria' element={<Main />} />
            <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
    );
};