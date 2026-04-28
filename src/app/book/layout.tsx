export default function BookLayout(
    { children }: Readonly<{ children: React.ReactNode }>
) {
    return (
        <main className="flex flex-col gap-2 min-h-screen items-center justify-center">
            {children}
        </main>
    )
}