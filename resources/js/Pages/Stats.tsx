import { PageProps } from '@inertiajs/core'
import { Head, Link, usePage } from '@inertiajs/react'

type StatsProps = PageProps & {
    uniqueShortCode: string
    originalUrl: string
    timesAccessed: number
}

const Stats = () => {
    const { props } = usePage<StatsProps>()
    const { uniqueShortCode, originalUrl, timesAccessed } = props

    return (
        <div className="min-h-screen bg-[#181818] text-slate-200 px-4 py-10 flex items-center justify-center">
            <Head title="Stats" />
            <div className="max-w-xl w-full bg-[#1f1f1f] border border-[#2c2c2c] rounded-2xl shadow-lg p-8 space-y-6">
                <h1 className="text-3xl font-bold text-center">📊 Link Stats</h1>

                <div className="space-y-4">
                    <div>
                        <p className="text-slate-400 text-sm">Original URL:</p>
                        <a
                            href={originalUrl}
                            className="text-blue-400 break-words hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {originalUrl}
                        </a>
                    </div>

                    <div>
                        <p className="text-slate-400 text-sm">Short Code:</p>
                        <code className="bg-[#2c2c2c] text-slate-200 px-3 py-1 rounded-lg inline-block">
                            {uniqueShortCode}
                        </code>
                    </div>

                    <div>
                        <p className="text-slate-400 text-sm">Times Accessed:</p>
                        <p className="text-2xl font-semibold text-green-400">{timesAccessed}</p>
                    </div>
                </div>

                <div className="text-center pt-4">
                    <Link
                        href="/"
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Stats
