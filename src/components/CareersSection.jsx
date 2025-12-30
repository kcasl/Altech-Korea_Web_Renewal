/**
 * 채용정보 섹션
 * - 현재 채용 포지션/문화/복지 등을 간단히 소개
 * - 실제 공고 링크는 추후 채용 사이트 또는 이메일로 연결 가능
 */
function CareersSection() {
  const positions = [
    {
      title: 'IT 금형설계 엔지니어 (경력)',
      stack: '3D CAD / Mold 설계 경험',
      description:
        '자동차/전자 분야 금형설계 경험 보유, 고객사와의 기술 커뮤니케이션이 가능한 분을 찾습니다.',
      type: '정규직',
    },
    {
      title: '설계 자동화 개발자 (신입·경력)',
      stack: 'C#, Python, CAD API',
      description:
        'CAD API를 활용한 설계 자동화 도구 개발, 사내/고객사 설계 프로세스 개선 업무를 담당합니다.',
      type: '정규직',
    },
    {
      title: '금형 데이터 엔지니어 (신입)',
      stack: 'DB / Data Pipeline',
      description:
        '금형 관련 데이터 수집·정제·시각화 업무를 담당하며, 디지털 트윈 기반 설계환경 구축을 함께 고민합니다.',
      type: '정규직',
    },
  ]

  return (
    <section
      className="space-y-8"
      aria-labelledby="careers-title"
    >
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#4b2e2b]">
          CAREERS
        </p>
        <h2
          id="careers-title"
          className="text-3xl font-extrabold tracking-tight text-neutral-900 md:text-4xl"
        >
          제조와 IT의 교차점에서
          <span className="block text-[#4b2e2b] font-extrabold">
            새로운 설계를 함께 만듭니다
          </span>
        </h2>
        <p className="max-w-3xl text-base leading-relaxed text-neutral-700 md:text-lg">
          알텍코리아는 금형설계 전문가와 IT 개발자가 한 팀으로 협업하는 조직
          문화를 지향합니다.
          <br />
          실제 채용 공고는 시기에 따라 변동될 수 있으며, 아래 내용은
          <span className="font-semibold text-[#4b2e2b]">
            {' '}
            채용 직무의 예시
          </span>
          로 활용하시면 됩니다.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {positions.map((position) => (
          <article
            key={position.title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/80"
          >
            <div className="mb-3 flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-neutral-900">
                {position.title}
              </h3>
              <span className="rounded-full border border-[#4b2e2b33] bg-[#4b2e2b0d] px-2 py-0.5 text-[10px] font-semibold text-[#4b2e2b]">
                {position.type}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#4b2e2b] md:text-base">
              {position.stack}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">
              {position.description}
            </p>
            {/* 실제 채용 지원 버튼 자리 */}
            <button
              type="button"
              className="mt-4 inline-flex items-center justify-center rounded-full border border-[#4b2e2b] bg-[#4b2e2b0d] px-3 py-1.5 text-xs font-medium text-[#4b2e2b] transition-colors hover:bg-[#4b2e2b12]"
            >
              상세 채용 문의 (예: recruit@altech.co.kr)
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CareersSection


