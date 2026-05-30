새 shadcn/ui 스타일 컴포넌트를 생성합니다. 인자: $ARGUMENTS (예: `Badge` 또는 `Badge --variants default,success,warning,error`)

다음 순서로 작업하세요:

1. **인자 파싱**:
   - 첫 번째 단어를 컴포넌트 이름으로 사용합니다 (PascalCase)
   - `--variants` 플래그가 있으면 쉼표로 분리해 variant 목록으로 사용합니다
   - `--variants`가 없으면 `default` 하나만 생성합니다

2. **컴포넌트 파일 생성**: `src/components/ui/[컴포넌트명소문자].tsx`
   - `src/lib/utils.ts`의 `cn()` 유틸리티를 임포트합니다
   - `class-variance-authority`의 `cva`와 `VariantProps`를 사용합니다
   - `React.forwardRef` 패턴을 적용합니다
   - `displayName`을 설정합니다
   - 각 variant에 Tailwind CSS 클래스를 의미에 맞게 지정합니다 (예: success → green, error → red)
   - `className` prop으로 외부 스타일 오버라이드를 허용합니다

3. **사용 예시 출력**: 생성된 컴포넌트의 import 경로와 각 variant 사용 코드 예시를 보여줍니다.
