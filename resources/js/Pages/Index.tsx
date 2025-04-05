import { Head, useForm, usePage } from "@inertiajs/react";
import { PageProps as InertiaPageProps } from "@inertiajs/core";

import { useState, useEffect } from "react";

type IndexProps = InertiaPageProps & {
    flash: {
        success: {
            'shortified-url': string;
            stats: string;
        } | null;
        error: string | null;
    };
};

const Index = () => {
    const { data, setData, post, processing, errors } = useForm({
        url: "",
    });

    const { props } = usePage<IndexProps>();
    const success = props.flash.success;
    const shortifiedUrl = success?.['shortified-url'];
    const stats = success?.stats;

    const [copied, setCopied] = useState(false);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setCopied(false);
        post("/");
    };

    useEffect(() => {
        const clearInput = () => {
            setData({ url: "" });
        };

        clearInput();
    }, [success]);

    const copyToClipboard = () => {
        if (success) {
            navigator.clipboard.writeText(shortifiedUrl ?? '');
            setCopied(true);
        }
    };

    return (
        <div className="w-full min-h-screen grid place-content-center px-4">
            <Head title="Home" />

            <div className="max-w-2xl w-full space-y-8">
                <h1 className="text-3xl font-bold text-center text-slate-200">
                    🔗 Shortify Your Links
                </h1>
                <p className="text-center text-slate-400">
                    Paste a long URL and we'll make it short and simple.
                </p>

                <form onSubmit={onSubmit} className="flex gap-2">
                    <input
                        type="url"
                        name="url"
                        value={data.url}
                        onChange={(e) => setData("url", e.target.value)}
                        className="flex-grow px-4 py-2 rounded-lg border text-[#181818] border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com/very/long/url"
                        required
                    />
                    <button
                        type="submit"
                        disabled={processing}
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Shorten
                    </button>
                </form>

                {errors.url && (
                    <p className="text-red-500 text-sm">{errors.url}</p>
                )}

                {success && (
                    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 bg-[#1f1f1f] p-4 rounded-lg border border-[#2c2c2c]">
                        <span className="text-green-400 font-mono truncate">{shortifiedUrl}</span>
                        <div className="flex gap-2 sm:ml-auto">
                            <button
                                onClick={copyToClipboard}
                                className="px-3 py-1 text-sm bg-green-600 text-white rounded hover:bg-green-700"
                            >
                                {copied ? "Copied!" : "Copy"}
                            </button>
                            {stats && (
                                <a
                                    href={stats}
                                    className="px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    View Stats
                                </a>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Index;
