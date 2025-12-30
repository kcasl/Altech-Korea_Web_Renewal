/**
 * 홈 페이지
 * - 배경: 흰색, 기본 글자: 검은색, 포인트 컬러: 짙은 갈색(#4b2e2b)
 * - 중앙에 큰 사진(이미지) 영역을 위한 자리
 * - 하단에 연락처 / 메일 / 주소 정보
 */
function HomePage() {
  return (
    <section className="space-y-10">
      {/* 상단 소개 텍스트 */}
      <header className="space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#4b2e2b]">
          ALTECH KOREA
        </p>
        <h1 className="text-4xl font-extrabold tracking-tight text-neutral-900 md:text-5xl">
          IT 금형설계 전문회사
          <span className="block text-[#4b2e2b] font-extrabold">
            알텍코리아
          </span>
        </h1>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">
          정밀 금형설계와 IT 기술을 융합하여,
          <br />
          설계 품질은 높이고 리드타임은 줄이는 디지털 금형 파트너를 지향합니다.
        </p>
      </header>

      {/* 중앙 이미지 자리 (현재는 박스로 자리만 확보) */}
      <div className="flex justify-center">
        <div className="flex h-72 w-full max-w-3xl items-center justify-center rounded-3xl border-2 border-dashed border-[#4b2e2b33] bg-neutral-50">
          <span className="text-base text-neutral-500">
            여기에는 추후 회사 대표 사진 또는 금형 관련 이미지를 넣을 수 있습니다.
          </span>
        </div>
      </div>

      {/* 연락처 / 메일 / 주소 정보 */}
      <section
        aria-label="알텍코리아 연락처 정보"
        className="mx-auto max-w-xl rounded-2xl border border-neutral-200 bg-neutral-50 px-6 py-5"
      >
        <h2 className="text-lg font-bold text-neutral-900">
          Contact
        </h2>
        <p className="mt-1 text-base text-neutral-700 font-medium">
          알텍코리아 | IT 금형설계 전문회사
        </p>
        <dl className="mt-4 space-y-2 text-base text-neutral-800">
          <div className="flex gap-2">
            <dt className="w-16 font-medium text-[#4b2e2b]">Tel.</dt>
            <dd>031-000-0000 (예시)</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 font-medium text-[#4b2e2b]">E-mail</dt>
            <dd>info@altech.co.kr (예시)</dd>
          </div>
          <div className="flex gap-2">
            <dt className="w-16 font-medium text-[#4b2e2b]">Address</dt>
            <dd>(예시) 경기도 ○○시 ○○로 00, 알텍코리아</dd>
          </div>
        </dl>
      </section>
    </section>
  )
}

export default HomePage


