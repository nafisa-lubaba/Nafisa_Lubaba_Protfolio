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
                <main className="min-h-[calc(100vh-4rem)] pr-32">
                    <Outlet />
                </main>
            </div>

            {/* Scroll to top button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 z-50 p-2 pr-24 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-colors duration-300"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                </svg>
            </button>
        </div>
    );
};

export default Root;