import { Routes, Route } from 'react-router-dom'
import SignPage from './pages/autorization/SignPage';
import MainPage from './pages/todoscreen/MainPage';

const Routing = () => {
    return (
        <Routes>
            <Route path="todo" element={<MainPage />} />
            <Route path="/" element={<SignPage />} />
        </Routes>
    )
}

export default Routing;