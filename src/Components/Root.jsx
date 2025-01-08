import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import AnimatedBackground from "../Components/AnimatedBackground ";

const Root = () => {
    return (
        <div className="relative min-h-screen overflow-x-hidden">
            <AnimatedBackground />
            <div className="relative z-10">
                <Navbar />
                <main className="min-h-[calc(100vh-4rem)] pr-4 pb-16 sm:pb-0 sm:pr-0">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Root;