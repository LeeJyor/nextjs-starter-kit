# Next.js Starter Kit

Next.js 15 + TypeScript + Tailwind CSS v4 + shadcn/ui 기반의 재사용 가능한 스타터 킷입니다.

## 기술 스택

| 기술 | 버전 | 역할 |
|------|------|------|
| Next.js | 15+ | 풀스택 프레임워크 (App Router) |
| React | 19 | UI 라이브러리 |
| TypeScript | 5 | 타입 안전성 |
| Tailwind CSS | 4 | 유틸리티 CSS |
| shadcn/ui | latest | 컴포넌트 라이브러리 |
| next-themes | latest | 다크모드 |
| lucide-react | latest | 아이콘 |

## 프로젝트 구조

```
src/
├── app/
│   ├── globals.css       # CSS 변수 (라이트/다크 테마)
│   ├── layout.tsx        # 루트 레이아웃 (ThemeProvider + Header + Footer)
│   └── page.tsx          # 홈 페이지 (컴포넌트 예시)
├── components/
│   ├── layout/
│   │   ├── header.tsx    # 헤더 (네비게이션 + 다크모드 토글)
│   │   └── footer.tsx    # 푸터
│   ├── providers/
│   │   └── theme-provider.tsx  # next-themes 래퍼
│   └── ui/
│       ├── button.tsx    # Button 컴포넌트 (6가지 variant)
│       ├── card.tsx      # Card 컴포넌트
│       └── theme-toggle.tsx    # 다크/라이트 전환 버튼
└── lib/
    └── utils.ts          # cn() 유틸리티 함수
```

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm start
```

개발 서버 실행 후 http://localhost:3000 에서 확인하세요.

## 새 컴포넌트 추가하기

shadcn/ui 컴포넌트 추가는 두 가지 방법이 있습니다.

**방법 1: CLI 사용 (권장)**
```bash
npx shadcn@latest add <컴포넌트명>
# 예시
npx shadcn@latest add dialog
npx shadcn@latest add input
npx shadcn@latest add table
```

**방법 2: 수동 추가**

`src/components/ui/` 폴더에 직접 파일 생성 후 shadcn/ui 공식 소스를 복사합니다.

## 다크모드

- **기본값**: OS 시스템 설정 따름 (`defaultTheme="system"`)
- **전환**: 헤더 우측 Sun/Moon 아이콘 클릭
- **저장**: `localStorage`에 자동 저장
- **변경**: `layout.tsx`의 `defaultTheme` prop 수정 (`"light"` | `"dark"` | `"system"`)

## cn() 유틸리티 사용법

```tsx
import { cn } from "@/lib/utils";

// 조건부 클래스 + Tailwind 충돌 자동 해소
<div className={cn(
  "base-class",
  isActive && "active-class",
  className  // 외부에서 전달받은 클래스 override 허용
)} />
```

## Button 사용 예시

```tsx
import { Button } from "@/components/ui/button";

// 기본
<Button>클릭</Button>

// 변형
<Button variant="outline">아웃라인</Button>
<Button variant="destructive">삭제</Button>

// 크기
<Button size="sm">작게</Button>
<Button size="lg">크게</Button>

// 링크로 사용 (asChild 패턴)
import Link from "next/link";
<Button asChild>
  <Link href="/about">소개 페이지</Link>
</Button>
```

## Card 사용 예시

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>제목</CardTitle>
    <CardDescription>설명</CardDescription>
  </CardHeader>
  <CardContent>
    본문 내용
  </CardContent>
  <CardFooter>
    <Button>액션</Button>
  </CardFooter>
</Card>
```

## Vercel 배포

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 GitHub 레포를 Vercel에 연결하면 push 시 자동 배포됩니다.

## 라이선스

MIT
