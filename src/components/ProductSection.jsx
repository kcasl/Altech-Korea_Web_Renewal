/**
 * 제품소개 섹션
 * - 실제 제품 이미지는 아직 없으므로, 솔루션/서비스 형태로 구조만 설계
 * - 카드형 UI로 각 솔루션의 특징을 요약
 */
function ProductSection() {
  const products = [
    {
      name: '디지털 금형설계 플랫폼',
      tag: 'PLATFORM',
      points: [
        '3D CAD 기반 금형 라이브러리 관리',
        '표준 부품 템플릿으로 설계 시간 단축',
        '버전 관리 및 변경 이력 추적',
      ],
    },
    {
      name: '설계 자동화 & 검증 모듈',
      tag: 'AUTOMATION',
      points: [
        '반복 업무 매크로/스크립트 자동화',
        '간섭·두께·언더컷 자동 체크 룰 셋',
        'CAE 연동 기본 해석 워크플로 제공',
      ],
    },
    {
      name: '협업·데이터 관리 솔루션',
      tag: 'COLLAB',
      points: [
        '공정별 To-Do & 검토 이력 관리',
        '클라우드/온프레미스 하이브리드 지원',
        '고객사 시스템 연계를 위한 API 제공',
      ],
    },
  ]

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

      {/* 3개의 제품/솔루션 카드 */}
      <div className="grid gap-5 md:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="group flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/80 transition-colors hover:border-[#4b2e2b]"
          >
            <div className="mb-4 flex items-center justify-between gap-2">
              <h3 className="text-base font-semibold text-neutral-900">
                {product.name}
              </h3>
              <span className="rounded-full border border-[#4b2e2b33] bg-[#4b2e2b0d] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#4b2e2b]">
                {product.tag}
              </span>
            </div>
            <ul className="mt-1 space-y-2 text-sm text-neutral-700 md:text-base">
              {product.points.map((point) => (
                <li key={point} className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#4b2e2b]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductSection


