import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import LenisScroll from "./components/LenisScroll";
import PrivacidadPage from "./pages/PrivacidadPage";
import TerminosPage from "./pages/TerminosPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
    return (
        <>
            <LenisScroll />
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                  <Route path="/privacidad" element={<PrivacidadPage />} />
             <Route path="/terminos" element={<TerminosPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer />
        </>
    );
}