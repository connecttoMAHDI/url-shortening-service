import { Button } from '@/Components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card'
import { PageProps, router } from '@inertiajs/core'
import { Head, Link, usePage } from '@inertiajs/react'
import { format } from 'date-fns'

type StatsProps = PageProps & {
    uniqueCode: string
    originalUrl: string
    timesAccessed: number
    lastAccessedAt: string
}

const Stats = () => {
    const { props } = usePage<StatsProps>()
    const { uniqueCode, originalUrl, timesAccessed, lastAccessedAt } = props

    return (
        <div className="w-full min-h-screen grid place-content-center p-4 md:p-0">
            <Head title="Statistics" />

            <Card>
                <CardHeader>
                    <CardTitle className='text-center text-2xl'>
                        Link Statistics
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <p>Original URL:</p>
                            <a
                                href={originalUrl}
                                className="break-words hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {originalUrl}
                            </a>
                        </div>

                        <div>
                            <p>Short Code:</p>
                            <code className="bg-secondary px-4 py-2 rounded-md inline-block">
                                {uniqueCode}
                            </code>
                        </div>

                        <div>
                            <p>Times Accessed:</p>
                            <p>{timesAccessed}</p>
                        </div>

                        {lastAccessedAt && (
                            <div>
                                <p>Last Visited At:</p>
                                <p>{format(lastAccessedAt, 'PPP h:m a')}</p>
                            </div>
                        )}
                    </div>
                </CardContent>
                <CardFooter className="justify-center">
                    <Button onClick={() => router.visit('/')}>
                        Back to Home
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Stats
