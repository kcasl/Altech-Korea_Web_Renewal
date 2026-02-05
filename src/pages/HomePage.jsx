import { useRef } from 'react'
import designImg from '../assets/mainpage/design.jpg'
import anodzImg from '../assets/mainpage/anodz.jpg'
import joboffImg from '../assets/mainpage/joboff.jpg'

const photoSections = [
  {
    id: 'design',
    image: designImg,
    title: '정밀 금형 설계 · 디자인',
    description:
      '3D CAD를 기반으로 한 정밀 금형 설계로 제품 형상과 생산성을 동시에 고려한 최적의 디자인을 제안합니다.'
  },
  {
    id: 'anodz',
    image: anodzImg,
    title: '가공 · 표면 처리 품질 관리',
    description:
      '알루미늄 아노다이징 등 다양한 표면 처리와 공정 데이터를 연계하여, 균일한 품질과 내구성을 확보합니다.'
  },
  {
    id: 'joboff',
    image: joboffImg,
    title: '기술 인재 양성 · 협업 공간',
    description:
      '엔지니어들이 함께 설계 데이터를 검토하고 개선하여, 지속적인 기술 성장 문화를 조성합니다.'
  }
]

/**
 * 홈 페이지
 * - 배경: 흰색, 기본 글자: 검은색, 포인트 컬러: 짙은 갈색(#4b2e2b)
 * - 중앙에 큰 사진(이미지) 영역을 위한 자리
 * - 하단에 연락처 / 메일 / 주소 정보
 */
function HomePage() {
  const sectionRefs = useRef([])

  const handleScrollNext = (index) => {
    const next = sectionRefs.current[index + 1]
    if (next) {
      next.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="space-y-10">
      {/* 상단 소개 텍스트 */}
      <header className="space-y-20 text-center">
        <p className="text-m font-bold uppercase tracking-[0.3em] text-[#4b2e2b]">
          ALTECH KOREA
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-6xl">
          IT 금형설계 전문회사
          <span className="block text-[#4b2e2b] font-extrabold">
            알텍코리아
          </span>
        </h1>
        <p className="mx-auto max-w-xl font-bold text-base leading-relaxed text-neutral-700 md:text-xl">
          정밀 금형설계와 IT 기술을 융합하여,
          설계 품질은 높이고 리드타임은 줄이는 디지털 금형 파트너를 지향합니다.
        </p>
      </header>

      {/* 스크롤 시 화면을 가득 채우는 메인 이미지 섹션 */}
      <section
        aria-label="알텍코리아 주요 비주얼 소개"
        className="relative left-1/2 right-1/2 -mx-[50vw] w-screen"
      >
        {photoSections.map((item, index) => (
          <article
            key={item.id}
            className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-black md:min-h-[90vh]"
            ref={(el) => (sectionRefs.current[index] = el)}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed'
            }}
          >
            {/* 어두운 오버레이 */}
            <div className="absolute inset-0 bg-black/50" />

            {/* 텍스트 콘텐츠 */}
            <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-white md:text-base">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {item.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-100/90 md:text-2xl">
                {item.description}
              </p>
            </div>

            {/* 아래/위 방향 화살표 */}
            {index < photoSections.length - 1 ? (
              <button
                type="button"
                onClick={() => handleScrollNext(index)}
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/60 bg-black/40 px-4 py-3 text-white shadow-lg backdrop-blur transition hover:bg-white hover:text-black"
                aria-label="다음 섹션으로 이동"
              >
                <span className="block text-2xl leading-none">↓</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/60 bg-black/40 px-4 py-3 text-white shadow-lg backdrop-blur transition hover:bg-white hover:text-black"
                aria-label="맨 위로 이동"
              >
                <span className="block text-2xl leading-none">↑</span>
              </button>
            )}
          </article>
        ))}
      </section>

      {/* 연락처 / 메일 / 주소 정보 */}
      <section
        aria-label="알텍코리아 연락처 정보"
        className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-neutral-50 px-4 py-4 sm:px-6 sm:py-5"
      >
        <h2 className="text-lg font-bold text-neutral-900 sm:text-xl">
          Contact
        </h2>
        <p className="mt-1 text-sm font-semibold text-neutral-800 sm:text-base">
          알텍코리아 | IT 금형설계 전문회사
        </p>
        <dl className="mt-4 space-y-3 text-sm text-neutral-800 sm:text-base">
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
            <dt className="font-medium text-[#4b2e2b] sm:w-24">Address</dt>
            <dd className="break-keep">
              경기도 부천시 오정로 190번길 21, 알텍코리아
            </dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
            <dt className="font-medium text-[#4b2e2b] sm:w-24">Mobile</dt>
            <dd>010-5332-1138 (상담 전화)</dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
            <dt className="font-medium text-[#4b2e2b] sm:w-24">E-mail</dt>
            <dd className="break-all">yuhan74@hanmail.net</dd>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
            <dt className="font-medium text-[#4b2e2b] sm:w-24">Biz No.</dt>
            <dd>130-46-32742</dd>
          </div>
        </dl>
      </section>
    </section>
  )
}

export default HomePage


