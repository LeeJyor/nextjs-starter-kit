새 Next.js 페이지를 생성합니다. 인자: $ARGUMENTS (예: `about` 또는 `blog/[slug]`)

다음 순서로 작업하세요:

1. **페이지 파일 생성**: `src/app/$ARGUMENTS/page.tsx`를 생성합니다.
   - 파일명에서 페이지 제목을 유추합니다 (예: `about` → "소개", `blog/[slug]` → "블로그")
   - 동적 라우트(`[slug]` 등)가 있으면 `params` prop을 포함합니다
   - 공통 레이아웃(Header/Footer)은 이미 `layout.tsx`에 있으므로 중복 추가하지 않습니다
   - shadcn/ui Card, Button 등 기존 컴포넌트를 활용한 기본 구조를 작성합니다

2. **네비게이션 링크 추가**: `src/components/layout/header.tsx`를 읽고 nav 영역에 새 페이지 링크를 추가합니다.

3. **결과 보고**: 생성된 파일 경로와 추가된 네비게이션 링크를 알려줍니다.
