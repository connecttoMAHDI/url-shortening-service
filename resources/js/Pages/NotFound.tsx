import { Button } from "@/Components/ui/button";
import { Head, Link, router } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Link2Off } from "lucide-react";

const NotFound = () => {
    return (
        <div className="w-full min-h-screen grid place-content-center p-4 md:p-0">
            <Head title="Link Not Found" />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-secondary border border-border shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6"
            >
                <div className="flex justify-center">
                    <Link2Off
                        className="text-red-400 w-16 h-16"
                        strokeWidth={1.5}
                    />
                </div>
                <h1 className="text-3xl font-bold">
                    Oops! Link not found
                </h1>
                <p className="text-muted-foreground">
                    We couldn't find the short URL you're looking for. It might
                    have expired, been deleted, or never existed.
                </p>
                <Button onClick={() => router.visit('/')}>
                    Back to Home
                </Button>
            </motion.div>
        </div>
    );
};

export default NotFound;
