import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-screen-xl items-center justify-between px-4">
        {/* 로고 / 사이트명 */}
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-primary">Next</span>
          <span className="text-muted-foreground">Starter</span>
        </Link>

        {/* 네비게이션 */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            홈
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            소개
          </Link>
        </nav>

        {/* 다크모드 토글 */}
        <ThemeToggle />
      </div>
    </header>
  );
}
