import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, Shield, Palette } from "lucide-react";

// 기능 카드 데이터 — 실제 프로젝트에서는 CMS나 API로 교체
const features = [
  {
    icon: Zap,
    title: "빠른 개발",
    description:
      "Next.js 15 App Router와 TypeScript로 타입 안전한 풀스택 개발 환경을 제공합니다.",
    badge: "App Router",
  },
  {
    icon: Palette,
    title: "아름다운 UI",
    description:
      "shadcn/ui 컴포넌트와 Tailwind CSS로 일관된 디자인 시스템을 손쉽게 구축합니다.",
    badge: "shadcn/ui",
  },
  {
    icon: Shield,
    title: "다크모드 내장",
    description:
      "next-themes로 시스템 테마를 자동 감지하고, 사용자가 직접 전환할 수 있습니다.",
    badge: "next-themes",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16">
      {/* 히어로 섹션 */}
      <section className="mb-16 text-center">
        <div className="mb-4 inline-flex items-center rounded-full border px-3 py-1 text-xs text-muted-foreground">
          Next.js 15 + TypeScript + Tailwind v4
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
          프로젝트를{" "}
          <span className="text-primary">빠르게 시작</span>하세요
        </h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
          최신 Next.js 스택으로 즉시 사용 가능한 스타터 킷입니다.
          shadcn/ui 컴포넌트와 다크모드가 이미 설정되어 있습니다.
        </p>

        {/* Button variant 예시 */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Button size="lg">시작하기</Button>
          <Button size="lg" variant="outline">
            문서 보기
          </Button>
          <Button size="lg" variant="ghost">
            GitHub
          </Button>
        </div>
      </section>

      {/* 기능 카드 섹션 — Card 컴포넌트 예시 */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-semibold">포함된 기능</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="flex flex-col">
                <CardHeader>
                  <div className="mb-2 flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-2">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground">
                      {feature.badge}
                    </span>
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1" />
                <CardFooter>
                  <Button variant="ghost" className="w-full" size="sm">
                    자세히 보기
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Button variant 전체 showcase */}
      <section className="rounded-xl border bg-muted/40 p-8">
        <h2 className="mb-6 text-xl font-semibold">Button Variants</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="destructive">Destructive</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>
    </div>
  );
}
