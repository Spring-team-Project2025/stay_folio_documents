# 사이트 소개 페이지 디자인 가이드

## StayFolio v2 디자인 가이드 (Toss-inspired)

### 1) 디자인 원칙

- 중성 팔레트 + 단일 포인트 블루  
  → 시각적 피로 감소 및 콘텐츠 집중 유도, 깔끔하고 현대적인 느낌 제공
- 높은 대비, 절제된 그림자, 넉넉한 여백  
  → 콘텐츠 가독성 향상과 시각적 계층 구조 명확화, 사용자 경험 개선
- 8pt 그리드, 명확한 호버/포커스 피드백, 접근성 준수  
  → 일관된 레이아웃 유지와 인터랙션 명확성, 모든 사용자에게 접근성 보장

### 2) 컬러 시스템

사용 비율: Neutral 80% / Primary Blue 15% / Semantic 5%

Primary

- Primary Blue 700: `#1E60FF`  
  → 주요 CTA 버튼, 링크 강조, 액티브 상태 표시
- Primary Blue 600: `#2F6BFF`  
  → 버튼 호버 상태, 인터랙티브 요소 강조
- Primary Blue 500: `#3B7BFF`  
  → 포커스 링, 보조 강조색

Neutral (Grayscale)

- N0: `#FFFFFF`  
  → 기본 배경, 카드 배경
- N50: `#F8FAFC`  
  → 섹션 교차 배경, 호버 배경
- N100: `#F1F5F9`  
  → 입력 필드 배경, 보조 배경
- N200: `#E2E8F0`  
  → 구분선, 테두리 기본 색상
- N300: `#CBD5E1`  
  → 구분선 강조 시 사용
- N600: `#475569`  
  → 보조 텍스트, 비활성 상태 텍스트
- N800: `#1F2937`  
  → 본문 텍스트, 주요 텍스트
- N900: `#111827`  
  → 헤더 텍스트, 최상위 텍스트 강조

Semantic

- Success: `#16A34A`  
  → 성공 메시지, 긍정 알림
- Warning: `#B45309`  
  → 경고 메시지, 주의 알림
- Error: `#DC2626`  
  → 에러 메시지, 오류 상태 표시

가이드

- 배경: N0 → 섹션 교차 시 N50
- 구분선/테두리: N200 (진하게 필요 시 N300)
- 텍스트: 본문 N800, 보조 N600
- 포인트: Primary Blue 700/600 (남용 금지)

### 3) 타이포그래피

- Pretendard(메인) / Noto Sans KR(보조)
- 굵기: 700, 600, 500, 400
- 스케일/라인하이트/자간 및 사용 예시
  - Display: 48px / 1.2 / -1%  
    → 메인 페이지 타이틀, 대형 배너 텍스트
  - H1: 40px / 1.2 / -1%  
    → 페이지 메인 타이틀, 주요 섹션 헤더
  - H2: 28px / 1.25 / -0.5%  
    → 섹션 제목, 서브 타이틀
  - H3: 22px / 1.35 / 0  
    → 카드 제목, 모달 타이틀
  - Body1: 18px / 1.6 / 0  
    → 주요 본문 텍스트, 설명 문구
  - Body2: 16px / 1.6 / 0  
    → 보조 텍스트, 캡션, 부가 정보
  - Caption: 13px / 1.4 / 0.5%  
    → 각종 라벨, 보조 안내 문구

### 4) 레이아웃 & 간격

- 12컬럼, max 1440px, 좌우 40px(데스크탑) / 32px(태블릿) 패딩
- 섹션 여백:
  - 데스크탑: 112px 상하
  - 태블릿: 88px 상하
  - 모바일: 64px 상하
- 기본 간격(요소 간 마진/패딩):
  - 16px (작은 간격, 아이콘 간격 등)
  - 24px (일반 텍스트 및 요소 간격)
  - 40px (섹션 내 그룹 간격)
- 카드 라운드: 10–12px, 그림자 최소화(`0 4px 20px rgba(0,0,0,0.05)`), 내부 패딩 최소 36px
- 예시:
  - 버튼과 텍스트 간격 24px
  - 카드 내부 패딩 36px 이상
  - 섹션 간격 데스크탑 112px, 모바일 64px

### 5) 컴포넌트

Buttons

- Primary: 배경 Primary Blue 700, 텍스트 N0, Hover: Primary Blue 600, Disabled: 배경 N200/텍스트 N600, Focus: 2px Primary Blue 500
  - 사용 예시: 주요 CTA 버튼, 폼 제출 버튼
- Secondary: 배경 N0, 보더 N200, 텍스트 N800, Hover: N50
  - 사용 예시: 보조 액션 버튼, 취소 버튼
- Tertiary: 투명, 텍스트 Primary Blue 700, Hover: N50
  - 사용 예시: 링크 스타일 버튼, 텍스트 버튼

Inputs

- 배경 N0/N100, 보더 N200, 라운드 10px, Focus: 2px Primary Blue 500
  - 사용 예시: 로그인/회원가입 폼, 검색창

Header

- 배경 N0, 하단 1px N200, 스티키, 호버/포커스 명확
  - 사용 예시: 사이트 상단 내비게이션 바, 주요 메뉴

Card

- 배경 N0, 1px N200, 라운드 12px, Hover: N50
  - 사용 예시: 콘텐츠 요약, 제품 정보, 뉴스 피드

Links

- 텍스트 Primary Blue 700, Hover: underline 또는 살짝 진하게
  - 사용 예시: 본문 내 하이퍼링크, 네비게이션 링크

### 6) 접근성

- 본문/버튼 텍스트 대비율 ≥ 4.5:1  
  → WCAG 대비율 검사 툴 사용하여 정기적으로 점검
- 터치 타겟 ≥ 44px  
  → 모바일 환경에서 터치 영역 크기 확인 및 조정
- 키보드 포커스 링 항상 표시  
  → CSS로 `:focus-visible` 스타일 적용, 포커스 상태 명확히 표현

### 7) 토큰(CSS 변수)

신규(권장)

- `--primary-700: #1E60FF`
- `--primary-600: #2F6BFF`
- `--primary-500: #3B7BFF`
- `--neutral-0: #FFFFFF`
- `--neutral-50: #F8FAFC`
- `--neutral-100: #F1F5F9`
- `--neutral-200: #E2E8F0`
- `--neutral-300: #CBD5E1`
- `--neutral-600: #475569`
- `--neutral-800: #1F2937`
- `--neutral-900: #111827`
- `--success-600: #16A34A`
- `--warning-600: #B45309`
- `--error-600: #DC2626`

레거시 호환(점진 제거 권장)

- `--color-black` → `--neutral-900`
- `--color-white` → `--neutral-0`
- `--color-blue-gray` → `--neutral-300` 또는 `--neutral-200`
- `--color-warm-gray` → `--neutral-100` 또는 `--neutral-50`
- `--color-beige` → 지양(필요 시 `--neutral-50`)
- `--color-error` → `--error-600`

**노트:** CSS 변수는 `--category-shade` 형태로 명명하여 일관성 유지 권장 (예: `--primary-700`). 신규 변수를 우선 사용하고, 레거시 변수는 점진적으로 대체해주세요.

### 8) 예시 사용

- Primary 버튼: 배경 `var(--primary-700)`, hover `var(--primary-600)`, 텍스트 `var(--neutral-0)`
- 카드: 배경 `var(--neutral-0)`, 보더 `var(--neutral-200)`
- 본문 텍스트: `var(--neutral-800)`, 보조: `var(--neutral-600)`
- 구분선/표 테두리: `var(--neutral-200)`
- 폼 필드: 배경 `var(--neutral-100)`, 보더 `var(--neutral-200)`, 포커스 `var(--primary-500)`
- 내비게이션 바: 배경 `var(--neutral-0)`, 텍스트 `var(--neutral-900)`, 활성 링크 `var(--primary-700)`

---

아래는 레거시 가이드(참고용)

## 1. 컬러 팔레트

| 구분                 | Hex       | 용도                   |
| -------------------- | --------- | ---------------------- |
| **Primary Black**    | `#1A1A1A` | 헤더, 텍스트 기본      |
| **Primary White**    | `#FFFFFF` | 배경, 컨테이너         |
| **Accent Beige**     | `#F5E9DA` | 포인트 영역, 버튼 배경 |
| **Accent Blue Gray** | `#A8B4BF` | 서브 포인트, 구분선    |
| **Accent Warm Gray** | `#E4E1DE` | 카드 배경, 섹션 배경   |
| **Error Red**        | `#E57373` | 경고 메시지, 에러 표시 |

**규칙**

- 페이지 전체는 블랙 & 화이트를 기본으로 하고, 포인트 색상(베이지, 블루그레이)은 **강조가 필요한 영역**에만 사용
- 너무 많은 색상을 한 화면에 쓰지 않고, **화이트 공간(여백)**을 충분히 확보

---

## 2. 폰트 & 타이포그래피

- **메인 폰트**: [Pretendard](https://cactus.tistory.com/306)
- **보조 폰트**: Noto Sans KR (한글 가독성 보완)
- **폰트 크기 체계**
  - H1 (페이지 타이틀): 40px / Bold / 자간 -1%
  - H2 (섹션 타이틀): 28px / Semi-Bold / 자간 -0.5%
  - Body1: 18px / Regular / 자간 0
  - Body2: 16px / Regular / 자간 0
  - Caption: 13px / Regular / 자간 0.5%

---

## 3. 레이아웃 & 간격

- **그리드**: 12컬럼 / 최대 1200px / 좌우 패딩 24px
- **섹션 여백**: 상·하 80px
- **요소 간 여백**: 기본 16px, 큰 그룹 간 40px
- **카드**: 모서리 radius 12px, 그림자 `0 4px 20px rgba(0,0,0,0.05)`

---

## 4. 버튼 스타일

- **Primary Button**
  - 배경: Accent Beige
  - 텍스트: Primary Black
  - Padding: 12px 24px
  - Radius: 8px
  - Hover: 배경 색 살짝 어둡게 (`#EBDCC8`)
- **Secondary Button**
  - 배경: 투명
  - 테두리: 1px solid Primary Black
  - Hover: 배경 `#F8F8F8`

---

## 5. 이미지 & 아이콘

- **이미지 스타일**
  - 모든 이미지 모서리 radius 12px
  - 큰 배경 이미지는 **그레이 톤 오버레이(30%)** 적용하여 텍스트 가독성 확보
- **아이콘**
  - 단색(Black / White) 위주
  - 라운드 처리된 간결한 아이콘 사용 (예: Feather Icons)

---

## 6. UI 컴포넌트 규칙

- **헤더**
  - 로고 좌측, 메뉴 중앙, CTA 버튼 우측
  - 배경: White, 스크롤 시 그림자 추가
- **카드**
  - 이미지 상단, 텍스트 하단
  - Hover 시 확대 효과 (scale 1.03)
- **섹션**
  - 배경색 번갈아 사용 (White / Warm Gray)
  - 각 섹션 시작 부분에 작은 Accent Line 추가

---

## 7. 반응형 규칙

- **데스크탑**: 기본 레이아웃
- **태블릿(≤1024px)**: 2컬럼, 폰트 90% 축소
- **모바일(≤768px)**: 1컬럼, 폰트 80% 축소, 섹션 여백 40px로 축소

---

📌 **추가 팁**
이 가이드를 AI에게 그대로 주면,  
Figma나 Midjourney, 또는 HTML/CSS에서 **일관된 스타일**을 자동으로 구현할 수 있습니다.
