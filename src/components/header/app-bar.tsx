import "server-only";

export async function AppBar({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="flex flex-row justify-between items-center px-5 py-1 sticky top-0 z-50 bg-white dark:bg-black">
      {children}
    </header>
  );
}

export function SubHeader({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <header className="flex flex-row justify-between items-center py-1 sticky top-12 z-50 bg-white dark:bg-black">
      {children}
    </header>
  );
}
