/**
 * 회사소개 섹션
 * - 비전, 핵심 가치, 연혁 요약 등을 포함
 * - 실제 데이터는 운영 단계에서 교체 가능하도록 더미 텍스트 위주로 구성
 */
function CompanySection() {
  const values = [
    {
      title: 'Precision · 정밀',
      description:
        'μ 단위까지 고려하는 정밀 금형설계 노하우를 기반으로 제품의 품질과 일관성을 보장합니다.',
    },
    {
      title: 'Digital · 디지털',
      description:
        'CAD/CAE/PLM을 연계한 디지털 엔지니어링 환경으로 설계-검증-양산까지 데이터를 일원화합니다.',
    },
    {
      title: 'Partner · 파트너십',
      description:
        '고객사 개발 프로세스에 깊이 참여하여 장기적인 설계 파트너로서 가치를 제공합니다.',
    },
  ]

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
          알텍코리아는 자동차, 가전, 모바일, 2차전지 등 다양한 산업군의 금형
          개발 프로젝트를 수행하며, 축적된
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

      {/* 3가지 핵심 가치 카드 레이아웃 */}
      <div className="grid gap-4 md:grid-cols-3">
        {values.map((value) => (
          <article
            key={value.title}
            className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/80"
          >
            <h3 className="text-base font-semibold text-neutral-900">
              {value.title}
            </h3>
            <p className="text-sm leading-relaxed text-neutral-700 md:text-base">
              {value.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CompanySection


