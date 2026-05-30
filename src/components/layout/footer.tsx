export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t bg-background">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Next Starter Kit. MIT License.
        </p>
        <p className="text-sm text-muted-foreground">
          Built with Next.js + shadcn/ui
        </p>
      </div>
    </footer>
  );
}
