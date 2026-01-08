import { useState } from 'react'
import cncImg1 from '../assets/comunity/cnc/cnc1.jpg'
import cncImg2 from '../assets/comunity/cnc/cnc2.jpg'
import cncImg3 from '../assets/comunity/cnc/cnc3.jpg'
import cncImg4 from '../assets/comunity/cnc/CNC4.jpg'
import cncImg5 from '../assets/comunity/cnc/cnc5.jpg'
import cncImg6 from '../assets/comunity/cnc/cnc6.jpg'
import cncImg7 from '../assets/comunity/cnc/cnc7.jpg'
import cncImg8 from '../assets/comunity/cnc/cnc8.jpg'
import laserImg1 from '../assets/comunity/raser/r1.jpg'
import laserImg2 from '../assets/comunity/raser/r2.jpg'
import laserImg3 from '../assets/comunity/raser/r3.jpg'
import anodImg1 from '../assets/comunity/anoda/a1.jpg'
import anodImg2 from '../assets/comunity/anoda/a2.jpg'
import anodImg3 from '../assets/comunity/anoda/a3.jpg'

function CommunitySection() {
  const cncPhotos = [
    { src: cncImg1, label: 'CNC 조각기' },
    { src: cncImg2, label: 'CNC 작업' },
    { src: cncImg3, label: '프로그램 세팅' },
    { src: cncImg4, label: 'CNC 가공설비' },
    { src: cncImg5, label: 'CNC 가공샘플' },
    { src: cncImg6, label: 'CNC 가공샘플' },
    { src: cncImg7, label: '3차원가공' },
    { src: cncImg8, label: '성형기' },
  ]

  const laserPhotos = [
    { src: laserImg1, label: '레이저각인/일러스트세팅' },
    { src: laserImg2, label: '3차원 곡면 인쇄' },
    { src: laserImg3, label: '패드인쇄/자동고무패드' },
  ]

  const anodizingPhotos = [
    { src: anodImg1, label: '화학연마/표면광택' },
    { src: anodImg2, label: '양극산화피막' },
    { src: anodImg3, label: '무늬퀠실링/표면코딩효과' },
  ]

  const equipmentTabs = [
    {
      id: 'cnc',
      label: 'CNC 조각기',
      title: 'CNC 조각기',
      description:
        'CNC 조각기는 복잡한 형상과 미세한 패턴을 고속·고정밀로 가공할 수 있는 장비로, 각종 전자제품 부품 및 금속 액세서리 제작에 활용됩니다.',
      detail:
        '알텍코리아는 다양한 재질과 형상을 안정적으로 가공할 수 있도록 공구 조건과 가공 데이터를 표준화하여 운용하고 있습니다.',
    },
    {
      id: 'laser-print',
      label: '레이저 및 인쇄기',
      title: '레이저 마킹 · 인쇄기',
      description:
        '레이저 마킹 장비와 인쇄기는 제품 표면에 문자, 로고, 패턴을 고해상도로 표현하는 데 사용되며, 영구적인 식별과 디자인 구현을 동시에 만족합니다.',
      detail:
        '각종 로고, 시리얼 번호, UI 아이콘 등을 제품 형상에 맞춰 인쇄·각인하여 브랜드 일관성과 가독성을 높입니다.',
    },
    {
      id: 'anodizing',
      label: '아노다이징 장비',
      title: '아노다이징 장비',
      description:
        '아노다이징 라인은 알루미늄 표면에 산화 피막을 형성하여 내식성과 내마모성을 높이고, 다양한 색상 구현을 가능하게 하는 핵심 설비입니다.',
      detail:
        '휴대기기 하우징, 상표 플레이트 등에서 요구되는 색상·광택·질감을 맞추기 위해 공정 조건을 세밀하게 관리합니다.',
    },
  ]

  const [activeTabId, setActiveTabId] = useState('cnc')

  const activeTab =
    equipmentTabs.find((tab) => tab.id === activeTabId) ?? equipmentTabs[0]

  return (
    <section
      className="space-y-8"
      aria-labelledby="community-title"
    >
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4b2e2b]">
          COMMUNITY
        </p>
        <h2
          id="community-title"
          className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
        >
          지식과 경험을 나누는
          <span className="block text-[#4b2e2b] font-extrabold">
            엔지니어 커뮤니티를 지향합니다
          </span>
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          알텍코리아는 금형설계, 자동화, 데이터 엔지니어링과 관련된 인사이트를
          꾸준히 공유하며, <br/>
          <span className="font-semibold text-[#4b2e2b]">
            {' '}
            업계와 함께 성장하는 커뮤니티
          </span>
          를 만들고자 합니다.
        </p>
      </header>

      {/* 장비 소개 탭 영역 */}
      <section className="space-y-6 rounded-2xl border border-neutral-200 bg-white px-4 py-5 md:px-6 md:py-6">
        <p className="text-lg font-bold text-[#4b2e2b] md:text-xl">
          회사 전경 및 설비장비
        </p>

        <div className="flex flex-wrap gap-3">
          {equipmentTabs.map((tab) => (
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
            <p className="mt-2 text-base leading-relaxed text-neutral-700 md:text-lg">
              {activeTab.description}
            </p>
            <p className="mt-1 text-base leading-relaxed text-neutral-600 md:text-lg">
              {activeTab.detail}
            </p>
          </div>

          {/* CNC 조각기 이미지 갤러리 */}
          {activeTab.id === 'cnc' && (
            <div className="grid gap-6 sm:grid-cols-2">
              {cncPhotos.map((photo) => (
                <figure
                  key={photo.label}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="h-72 w-full object-contain md:h-80"
                  />
                  <figcaption className="px-3 py-2 text-center text-xs font-medium text-neutral-800 md:text-sm">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {/* 레이저 및 인쇄기 이미지 갤러리 */}
          {activeTab.id === 'laser-print' && (
            <div className="grid gap-6 sm:grid-cols-2">
              {laserPhotos.map((photo) => (
                <figure
                  key={photo.label}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="h-72 w-full object-contain md:h-80"
                  />
                  <figcaption className="px-3 py-2 text-center text-xs font-medium text-neutral-800 md:text-sm">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}

          {/* 아노다이징 장비 이미지 갤러리 */}
          {activeTab.id === 'anodizing' && (
            <div className="grid gap-6 sm:grid-cols-2">
              {anodizingPhotos.map((photo) => (
                <figure
                  key={photo.label}
                  className="overflow-hidden rounded-xl border border-neutral-200 bg-neutral-50"
                >
                  <img
                    src={photo.src}
                    alt={photo.label}
                    className="h-72 w-full object-contain md:h-80"
                  />
                  <figcaption className="px-3 py-2 text-center text-xs font-medium text-neutral-800 md:text-sm">
                    {photo.label}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
        </article>
      </section>
    </section>
  )
}

export default CommunitySection


