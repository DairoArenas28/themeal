import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";



export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <NavBar />
            <main className="flex-grow p-4">
                <Outlet />
            </main>
            <footer className="bg-gray-100 text-center py-2">
                © 2025
            </footer>
        </div>
    );
}