import { useState } from 'react'
import processImg from '../assets/productintro/process/kumkyoung-1.jpg'
import moldImg1 from '../assets/productintro/moldandpressure/mp1.jpg'
import moldImg2 from '../assets/productintro/moldandpressure/mp2.jpg'
import moldImg3 from '../assets/productintro/moldandpressure/mp3.jpg'
import cncMainImg from '../assets/productintro/cncmct/CNC-M.jpg'
import cncSampleImg from '../assets/productintro/cncmct/cnc1.jpg'
import pressAnodizingImg1 from '../assets/productintro/pressandanodz/ANODAIJING-0.jpg'
import pressAnodizingImg2 from '../assets/productintro/pressandanodz/anodaijing-P1.jpg'
import simbolImg1 from '../assets/productintro/simbol/anodaijing-P2-DANJO.jpg'
import simbolImg2 from '../assets/productintro/simbol/anodaijing-P3-DANJO-2.jpg'
import simbolImg3 from '../assets/productintro/simbol/anodaijing-P4-JUNJU.jpg'
import simbolImg4 from '../assets/productintro/simbol/anodaijing-P5-JUNJU.jpg'

/**
 * 제품소개 섹션
 * - 실제 제품 이미지는 아직 없으므로, 솔루션/서비스 형태로 구조만 설계
 * - 카드형 UI로 각 솔루션의 특징을 요약
 */
function ProductSection() {
  const productTabs = [
    {
      id: 'process',
      label: '작업순서',
      title: '작업 순서',
      description:
        '알텍코리아의 금형 설계·가공 전 공정을 한눈에 볼 수 있는 작업 순서입니다. 상담 → 설계 → 가공 → 검사 → 출하까지 단계별로 체계적으로 관리합니다.',
    },
    {
      id: 'mold-extrusion',
      label: '금형/압출',
      title: '금형 / 압출',
      description:
        '알루미늄 금형 설계부터 압출 공정까지, 제품 형상과 생산성을 동시에 고려한 솔루션을 제공합니다.',
    },
    {
      id: 'cnc-mct',
      label: 'CNC/MCT',
      title: 'CNC / MCT 가공',
      description:
        'CNC 고속 조각기와 MCT 설비를 활용하여 정밀 가공을 수행하며, 복잡한 형상도 고품질로 구현합니다.',
    },
    {
      id: 'press-anodizing',
      label: '프레스/아노다이징',
      title: '프레스 / 아노다이징',
      description:
        '프레스 공정과 알루미늄 아노다이징·착색 공정을 통해 내구성과 디자인을 동시에 만족시키는 제품을 완성합니다.',
    },
    {
      id: 'label-badge',
      label: '상표/라벨/뱃지',
      title: '상표 / 라벨 / 뱃지',
      description:
        '브랜드 이미지를 살리는 상표, 라벨, 알루미늄 뱃지·플레이트까지, 다양한 마킹 솔루션을 제공합니다.',
    },
  ]

  const [activeTabId, setActiveTabId] = useState('process')

  const activeTab = productTabs.find((tab) => tab.id === activeTabId) ?? productTabs[0]

  return (
    <section
      className="space-y-8"
      aria-labelledby="products-title"
    >
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4b2e2b]">
          PRODUCTS
        </p>
        <h2
          id="products-title"
          className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
        >
          금형설계 전문성을
          <span className="block text-sky-300">
            <span className="text-[#4b2e2b] font-extrabold">
              IT 솔루션과 서비스로 제공합니다
            </span>
          </span>
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          알텍코리아는 단순 도면 외주를 넘어, 고객사의 설계 프로세스를 함께
          설계합니다.
          <br />
          금형 라이브러리 표준화, 설계 자동화, 협업 환경까지 아우르는
          <span className="font-semibold text-[#4b2e2b]">
            {' '}
            통합 디지털 금형 솔루션
          </span>
          을 제공합니다.
        </p>
      </header>

      {/* 공정/제품 영역 탭 전환 */}
      <section className="space-y-6 rounded-2xl border border-neutral-200 bg-white px-4 py-5 md:px-6 md:py-6">
        <div className="flex flex-wrap gap-3">
          {productTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`rounded-full px-5 py-3 text-sm font-semibold transition md:px-7 md:text-base ${
                activeTabId === tab.id
                  ? 'bg-[#4b2e2b] text-white'
                  : 'bg-neutral-100 text-neutral-800 hover:bg-neutral-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <article className="space-y-4">
          <div>
            <h3 className="text-xl font-bold text-neutral-900 md:text-2xl">
              {activeTab.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">
              {activeTab.description}
            </p>
          </div>

          {/* 탭별 이미지 영역 */}
          {activeTab.id === 'process' && (
            <div className="overflow-hidden rounded-xl border border-neutral-200 bg-white">
              <img
                src={processImg}
                alt="작업 순서 프로세스"
                className="h-auto w-full object-contain"
              />
            </div>
          )}

          {activeTab.id === 'mold-extrusion' && (
            <div className="space-y-4">
              <img
                src={moldImg1}
                alt="금형 / 압출 소개 1"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
              <img
                src={moldImg2}
                alt="금형 / 압출 소개 2"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
              <img
                src={moldImg3}
                alt="금형 / 압출 소개 3"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
            </div>
          )}

          {activeTab.id === 'cnc-mct' && (
            <div className="space-y-4">
              <img
                src={cncMainImg}
                alt="CNC / MCT 가공 소개 메인"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
              <img
                src={cncSampleImg}
                alt="CNC / MCT 가공 샘플"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
            </div>
          )}

          {activeTab.id === 'press-anodizing' && (
            <div className="space-y-4">
              <img
                src={pressAnodizingImg1}
                alt="프레스 및 아노다이징 소개 1"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
              <img
                src={pressAnodizingImg2}
                alt="프레스 및 아노다이징 소개 2"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
            </div>
          )}

          {activeTab.id === 'label-badge' && (
            <div className="space-y-4">
              <img
                src={simbolImg1}
                alt="상표 / 라벨 / 뱃지 샘플 1"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
              <img
                src={simbolImg2}
                alt="상표 / 라벨 / 뱃지 샘플 2"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
              <img
                src={simbolImg3}
                alt="상표 / 라벨 / 뱃지 샘플 3"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
              <img
                src={simbolImg4}
                alt="상표 / 라벨 / 뱃지 샘플 4"
                className="h-auto w-full rounded-xl border border-neutral-200 object-contain bg-white"
              />
            </div>
          )}
        </article>
      </section>
    </section>
  )
}

export default ProductSection


