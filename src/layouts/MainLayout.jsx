import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";

export function MainLayout() {
    return(
        <>
            <Header />
            <Outlet />
            <Newsletter />
            <Footer />
        </>
    )
}