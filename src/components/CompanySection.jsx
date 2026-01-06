import { useState } from 'react'
import map1 from '../assets/companyintro/map1.jpg'
import map2 from '../assets/companyintro/map2.jpg'
import map3 from '../assets/companyintro/map3.jpg'

const companyMaps = [
  { id: 'road', label: '지도 보기 1', image: map1 },
  { id: 'satellite', label: '지도 보기 2', image: map2 },
  { id: 'detail', label: '지도 보기 3', image: map3 },
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
          <span className="font-semibold text-[#4b2e2b]">
            {' '}
            통합 엔지니어링 파트너
          </span>
          를 지향합니다.
        </p>
      </header>

      {/* 회사 소개 인사말 */}
      <section className="space-y-4 rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-6 text-neutral-800">
        <p className="text-lg font-bold text-[#4b2e2b] md:text-xl">
          CEO 인사말
        </p>
        <p className="text-base leading-relaxed md:text-lg">
          안녕하세요.
          <br />
          알텍코리아 홈페이지를 방문해 주신 고객 여러분께 진심으로 감사드립니다.
        </p>
        <p className="text-base leading-relaxed md:text-lg">
          저희 알텍코리아는 CNC 고속 조각기, 3차원 레이저 각인 및 곡면 인쇄 설비,
          알루미늄 착색 및 아노다이징 라인 등을 보유하고 있으며, 알루미늄
          뱃지와 플레이트, 금속 액세서리와 시제품 목업, 알루미늄 압출 전문 가공,
          알루미늄 아노다이징 등을 주요 생산 품목으로 하고 있습니다.
        </p>
        <p className="text-base leading-relaxed md:text-lg">
          21세기 디자인 혁명의 흐름에 발맞추어 제품 설계와 디자인을 포함한 금형
          설계 전 분야에서 최고의 품질과 합리적인 가격으로 고객 여러분께
          다가가겠습니다.
        </p>
        <p className="text-base leading-relaxed md:text-lg">
          그동안 세계적으로 우수한 기업들의 제품을 취급하며 쌓아 온 경험을
          바탕으로, 더욱 우수한 제품과 신뢰할 수 있는 파트너십으로 차별화된
          솔루션을 제공하겠습니다.
        </p>
        <p className="pt-2 text-right text-base font-semibold text-neutral-900">
          대표이사 최병열
        </p>
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
      </section>
    </section>
  )
}

export default CompanySection


