import { Head, router, usePage } from "@inertiajs/react";
import { useForm } from 'react-hook-form';


import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/Components/ui/card";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/Components/ui/form";
import { Input } from "@/Components/ui/input";
import { PageProps } from "@/types";
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";
import { z } from 'zod';
import { Alert } from "@/Components/ui/alert";

const schema = z.object({
    url: z.string().nonempty('Please paste your long URL here...').url('Please paste a valid URL.')
})

type FormValuesType = z.infer<typeof schema>;

type IndexProps = PageProps & {
    flash: {
        success: {
            shortifiedUrl: string;
            statsUrl: string;
        } | null;
        error: string | null;
    };
    shortenedUrlsCount: number
};

const Index = () => {
    const form = useForm<FormValuesType>({
        resolver: zodResolver(schema),
        defaultValues: {
            url: ''
        }
    });

    const [copied, setCopied] = useState<boolean>(false);
    const [processing, setProcessing] = useState<boolean>(false);

    const { props } = usePage<IndexProps>();

    const copyToClipboard = () => {
        if (props.flash.success) {
            navigator.clipboard.writeText(props.flash.success.shortifiedUrl ?? '');
            setCopied(true);
        }
    };

    const onSubmit = (values: FormValuesType) => {
        setProcessing(true);

        router.post('/', values, {
            onError: (errors) => {
                Object.entries(errors).forEach(([key, message]) => {
                    form.setError(key as keyof FormValuesType, {
                        type: 'server',
                        message: message as string,
                    });
                });
            },
            onFinish: () => setProcessing(false),
            onSuccess: () => form.reset()
        })
    };

    return (
        <div className="w-full min-h-screen grid place-content-center p-4 md:p-0">
            <Head title="Shortify" />

            <Card>
                <CardHeader>
                    <CardTitle className="text-center text-xl">
                        Make Your Links Short & Clean
                    </CardTitle>
                    <CardDescription className="text-center">
                        Paste your link. Click. Boom — it’s short and ready to go.
                        <br />
                        {props.shortenedUrlsCount} URLs shortened so far!
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name='url'
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <div className="flex flex-col md:flex-row gap-2">
                                                <Input
                                                    autoComplete='off'
                                                    placeholder='https://example.com/very/long/url'
                                                    className='flex-1'
                                                    {...field}
                                                />
                                                <Button
                                                    type='submit'
                                                    variant={'outline'}
                                                >
                                                    Shorten
                                                </Button>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </form>
                    </Form>
                </CardContent>
                {props.flash.success && (
                    <CardFooter>
                        <Alert>
                            <div className="w-full flex flex-col md:flex-row gap-2 justify-center items-center">
                                <span>
                                    {props.flash.success.shortifiedUrl}
                                </span>
                                <div className="w-full flex flex-col md:flex-row gap-2">
                                    <Button variant={'outline'} className="flex-1 w-full" onClick={copyToClipboard}>{copied ? 'Copied!' : 'Copy'}</Button>
                                    <Button className="flex-1 w-full" onClick={() => router.visit(props.flash.success?.statsUrl ?? '#')}>
                                        View Statistics
                                    </Button>
                                </div>
                            </div>
                        </Alert>
                    </CardFooter>
                )}
            </Card>
        </div>
    );
};

export default Index;
