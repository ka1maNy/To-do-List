import { Routes, Route } from 'react-router-dom'
import SignPage from './pages/autorization/SignPage';
import MainPage from './pages/todoscreen/MainPage';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="log" element={<SignPage />} />
        </Routes>
    )
}

export default Routing;