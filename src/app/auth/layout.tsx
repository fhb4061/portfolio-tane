export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex flex-col gap-5 min-h-screen items-center justify-center">
            <div className="w-full max-w-md">
                {children}
            </div>
        </main>
    )
}