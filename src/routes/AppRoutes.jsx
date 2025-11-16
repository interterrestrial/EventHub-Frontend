import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import MainLayout from '../layout/MainLayout';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Home />}>
                    <Route path="../pages/auth/login" element={<Login />} />
                    <Route path="../pages/auth/signup" element={<Signup />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
}