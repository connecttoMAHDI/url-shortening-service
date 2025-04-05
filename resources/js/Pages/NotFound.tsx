import { Head, Link } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Link2Off } from "lucide-react";

const NotFound = () => {
    return (
        <div className="w-full min-h-screen flex items-center justify-center px-4">
            <Head title="Not Found" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#1f1f1f] border border-[#2c2c2c] shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6"
            >
                <div className="flex justify-center">
                    <Link2Off
                        className="text-red-400 w-16 h-16"
                        strokeWidth={1.5}
                    />
                </div>
                <h1 className="text-3xl font-bold text-slate-200">
                    Oops! Link not found
                </h1>
                <p className="text-slate-400">
                    We couldn't find the short URL you're looking for. It might
                    have expired, been deleted, or never existed.
                </p>
                <Link
                    href="/"
                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                    Back to Home
                </Link>
            </motion.div>
        </div>
    );
};

export default NotFound;
