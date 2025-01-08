import { Outlet } from "react-router-dom";
// import AnimatedBackground from "./AnimatedBackground";
import Navbar from "./Navbar";
import AnimatedBackground from './AnimatedBackground '

const Root = () => {
    return (
        <div className="relative min-h-screen">
            <AnimatedBackground />
            <div className="relative z-10">
                <Navbar />
                <main className="min-h-[calc(100vh-4rem)] pr-32 pb-16 sm:pb-0">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Root;