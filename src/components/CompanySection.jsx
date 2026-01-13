import { useState } from 'react'
import map1 from '../assets/companyintro/map1.jpg'
import map2 from '../assets/companyintro/map2.jpg'
import map3 from '../assets/companyintro/map3.jpg'
import greetingBg from '../assets/인사말디자인.png'

const companyMaps = [
  { id: 'road', label: '지도 보기 1', image: map1 },
  { id: 'satellite', label: '지도 보기 2', image: map2 },
  { id: 'detail', label: '지도 보기 3', image: map3 },
]

const companyHistory = [
  {
    year: '2026',
    items: ['전자 부품 연구원과 신기술 공법 체결 사업'],
  },
  {
    year: '2025',
    items: [
      '엠스케일 장비 납품',
      '디투피 장비 납품',
      '(주)지엠앤테크 장비 납품',
      '(주)중일테크 장비 납품',
      '성원애드넷 장비 납품',
      '(주)금영 금형 설계제품 납품',
    ],
  },
  {
    year: '2024',
    items: [
      '(주)지엠앤테크 장비 납품',
      '골프닉코리아 장비 납품',
      '엠스케일 장비 납품',
      '(주)금영 금형 설계제품 납품',
    ],
  },
  {
    year: '2023',
    items: [
      '(주)중일테크 장비 납품',
      '성원애드넷 장비 납품',
      '(주)금영 금형 설계제품 납품',
      '(주) 태진 미디어 IT 금형 설계 사업',
    ],
  },
  {
    year: '2022',
    items: [
      '(주)지엠앤테크 장비 납품',
      '신기술 벤처 기업 IT 금형설계 사업',
      '전자 부품 연구원과 신기술 공법 체결 사업',
      '아이콘트롤스와 커즈와일 IT 금형 설계 사업',
      '신용 보증 기금 IT 금형 설계 사업',
      '(주) 태진 미디어 IT 금형 설계 사업',
    ],
  },
  {
    year: '2021',
    items: [
      '디투피 장비 납품',
      '아이콘트롤스와 커즈와일 IT 금형 설계 사업',
      '신용 보증 기금 IT 금형 설계 사업',
      '(주)금영 IT 금형 설계 사업',
    ],
  },
  {
    year: '2020',
    items: [
      '(주)지엠앤테크 장비 납품',
      '(주)금영 IT 금형 설계 사업',
      '한국 전자 IT 금형 설계 사업',
    ],
  },
  {
    year: '2019',
    items: [
      '디투피 장비 납품',
      '(주)금영 IT 금형 설계 사업',
      '(주) 태진 미디어 IT 금형 설계 사업',
    ],
  },
]

function CompanySection() {
  const [activeMapIndex, setActiveMapIndex] = useState(0)

  return (
    <section
      className="space-y-8"
      aria-labelledby="company-title"
    >
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4b2e2b]">
          COMPANY
        </p>
        <h2
          id="company-title"
          className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
        >
          IT와 제조를 잇는
          <span className="block text-[#4b2e2b] font-extrabold">
            디지털 금형설계 전문기업
          </span>
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          알텍코리아는 자동차, 가전, 모바일 등 다양한 산업군의 금형
          설계 프로젝트를 수행하며, <br></br> 축적된
          <span className="font-semibold text-[#4b2e2b]">
            {' '}
            3D 금형 설계 노하우
          </span>
          와 <span className="font-semibold text-[#4b2e2b]"> IT 기술</span>
          을 융합하여 최적의 설계 환경을 제공합니다.
          <br />
          설계 품질뿐 아니라 협업 효율, 데이터 관리, 설계 자동화까지 고려한
          <span className="whitespace-nowrap">
            <span className="font-semibold text-[#4b2e2b]">
              {' '}
              통합 엔지니어링 파트너
            </span>
            를 지향합니다.
          </span>
        </p>
      </header>

      {/* 회사 소개 인사말 */}
      <section className="relative overflow-hidden rounded-2xl border border-white/10 px-6 py-6 text-white">
        {/* 배경 이미지 */}
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{ backgroundImage: `url(${greetingBg})` }}
          aria-hidden="true"
        />
        {/* 반투명 필터(약 30% 어둡게) */}
        <div
          className="absolute inset-0 bg-black/30"
          aria-hidden="true"
        />

        {/* 사진은 원본 그대로 유지 + 검은 배경 제거(텍스트는 그림자로 가독성 확보) */}
        <div className="relative z-10 w-full space-y-4 p-5 drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] md:p-6">
          <p className="text-lg font-bold text-white md:text-xl">
            CEO 인사말
          </p>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            안녕하세요.
            <br />
            알텍코리아 홈페이지를 방문해 주신 고객 여러분께 진심으로 감사드립니다.
          </p>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            저희 알텍코리아는 CNC 고속 조각기, 3차원 레이저 각인 및 곡면 인쇄 설비,
            알루미늄 착색 및 아노다이징 라인 등을 보유하고 있으며, 알루미늄
            뱃지와 플레이트, 금속 액세서리와 시제품 목업, 알루미늄 압출 전문 가공,
            알루미늄 아노다이징 등을 주요 생산 품목으로 하고 있습니다.
          </p>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            21세기 디자인 혁명의 흐름에 발맞추어 제품 설계와 디자인을 포함한 금형
            설계 전 분야에서 최고의 품질과 합리적인 가격으로 고객 여러분께
            다가가겠습니다.
          </p>
          <p className="text-base leading-relaxed text-white/90 md:text-lg">
            그동안 세계적으로 우수한 기업들의 제품을 취급하며 쌓아 온 경험을
            바탕으로, 더욱 우수한 제품과 신뢰할 수 있는 파트너십으로 차별화된
            솔루션을 제공하겠습니다.
          </p>
          <p className="pt-2 text-center text-xl font-semibold text-white md:text-2xl">
            대표 최병열
          </p>
        </div>
      </section>

      {/* 회사 연혁 */}
      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-white px-6 py-6 text-neutral-800">
        <p className="text-lg font-bold text-[#4b2e2b] md:text-xl">
          회사 연혁
        </p>

        <p className="text-sm font-semibold text-neutral-700">
          - 연도별 실적{' '}
          <span className="font-medium text-[#4b2e2b]">
            (협력사 납품금액 5천만원 이상)
          </span>
        </p>

        <div className="relative border-l-2 border-[#4b2e2b]/30 pl-4 md:pl-6">
          {companyHistory.map((entry) => (
            <article
              key={entry.year}
              className="relative pb-5 last:pb-0"
            >
              <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full bg-[#4b2e2b]" />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:gap-4">
                <span className="ml-4 text-sm font-semibold text-[#4b2e2b] md:ml-6 md:text-base">
                  {entry.year}
                </span>
                <div className="space-y-1 text-sm leading-relaxed md:text-base">
                  <ul className="mt-1 list-disc space-y-0.5 pl-4">
                    {entry.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 오시는 길 */}
      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-6 text-neutral-800">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-lg font-bold text-[#4b2e2b] md:text-xl">
            오시는 길
          </p>
          <div className="inline-flex gap-2 rounded-full bg-neutral-100 px-2 py-1 text-xs md:text-sm">
            {companyMaps.map((map, index) => (
              <button
                key={map.id}
                type="button"
                onClick={() => setActiveMapIndex(index)}
                className={`rounded-full px-3 py-1 font-semibold transition ${
                  activeMapIndex === index
                    ? 'bg-[#4b2e2b] text-white'
                    : 'bg-white text-neutral-700'
                }`}
              >
                {map.label}
              </button>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-xl border border-neutral-200">
          <img
            src={companyMaps[activeMapIndex].image}
            alt="알텍코리아 오시는 길 지도"
            className="h-auto w-full object-cover"
          />
        </div>

        <p className="pt-2 text-sm text-neutral-700 md:text-base">
          경기도 부천시 오정로 190번길 21 2층
        </p>
      </section>
    </section>
  )
}

export default CompanySection


