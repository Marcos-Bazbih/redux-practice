import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/pages/User/User";
import Todos from "./components/pages/Todos/Todos";
import Header from "./components/layout/Header/Header";
import Sidebar from "./components/layout/Sidebar/Sidebar";
import Footer from "./components/layout/Footer/Footer";

const AppRouter = () => {
    return(
        <>
        <Header/>
        <BrowserRouter>
        <Sidebar/>
            <Routes>
                <Route exact path="/" element={<Todos/>} />
                <Route exact path="/user" element={<User/>} />
            </Routes>
        </BrowserRouter>
        <Footer/>
        </>
    )
}

export default AppRouter;