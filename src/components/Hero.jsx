/**
 * 메인 히어로 섹션
 * - 회사의 핵심 가치와 한 줄 소개를 보여주는 영역
 * - 추후 배경 이미지나 3D 렌더링 이미지를 추가해도 좋도록 여백 구성
 */
function Hero() {
  return (
    <section
      id="top"
      className="grid gap-10 md:grid-cols-2 md:items-center"
      aria-label="알텍코리아 메인 소개"
    >
      {/* 좌측 텍스트 콘텐츠 */}
      <div className="space-y-6">
        {/* 작은 배지형 태그 */}
        <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-xs font-medium text-sky-300">
          <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
          IT 기반 금형설계 · 자동화 솔루션
        </p>

        {/* 메인 헤드라인 */}
        <h1 className="text-3xl font-bold tracking-tight text-slate-50 md:text-4xl lg:text-5xl">
          정밀 금형설계를
          <span className="block bg-gradient-to-r from-sky-400 to-cyan-300 bg-clip-text text-transparent">
            IT 기술로 혁신하는 알텍코리아
          </span>
        </h1>

        {/* 보조 설명 텍스트 */}
        <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
          알텍코리아는 자동차 · 전자 · 모바일 산업을 위한 정밀 금형설계를
          기반으로, 설계 자동화·데이터 관리·시뮬레이션 등
          <span className="font-semibold text-sky-300">
            {' '}
            IT 융합 솔루션
          </span>
          을 제공하는 전문 기업입니다.
          <br />
          설계 품질은 높이고, 리드타임은 줄이는
          <span className="font-semibold text-sky-300"> 디지털 금형 파트너</span>
          를 지향합니다.
        </p>

        {/* 주요 키워드 3개를 뱃지 형태로 노출 */}
        <div className="flex flex-wrap gap-3">
          {[
            '3D 금형설계 전문 인력',
            '설계 자동화 시스템 구축',
            '전 공정 디지털 트레이스'
          ].map((keyword) => (
            <span
              key={keyword}
              className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1 text-xs text-slate-200"
            >
              {keyword}
            </span>
          ))}
        </div>
      </div>

      {/* 우측 비주얼 플레이스홀더
          - 실제 이미지는 나중에 교체 가능하도록 단순 카드 형태로 구성 */}
      <div className="relative">
        <div className="pointer-events-none absolute -inset-8 rounded-3xl bg-sky-500/20 blur-3xl" />
        <div className="relative h-64 rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-xl shadow-sky-900/30 md:h-80">
          <div className="flex h-full flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-sky-300/80">
                DIGITAL MOLD DESIGN
              </p>
              <p className="mt-3 text-lg font-semibold text-slate-50">
                CAD / CAE / PLM 기반
                <br />
                엔드투엔드 금형설계 프로세스
              </p>
            </div>
            <div className="space-y-2 text-xs text-slate-300">
              <p className="flex items-center justify-between">
                <span>자동화 설계 템플릿</span>
                <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  30% 리드타임 단축
                </span>
              </p>
              <p className="flex items-center justify-between">
                <span>3D 데이터 일원화</span>
                <span className="rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-semibold text-sky-300">
                  오류 재작업 최소화
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero


