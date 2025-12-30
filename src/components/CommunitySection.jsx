/**
 * 커뮤니티 섹션
 * - 기술 블로그, 세미나, 고객사 협업 활동 등을 소개하는 영역
 * - 실제 게시판/포럼 기능은 추후 별도 페이지로 연결
 */
function CommunitySection() {
  const items = [
    {
      category: 'TECH BLOG',
      title: 'IT 금형설계 팁 & 사례 공유',
      description:
        'CAD/CAE 활용 노하우, 설계 자동화 스크립트, 데이터 관리 방법 등을 정기적으로 공유합니다.',
      detail: '예: 월 1회 사내/사외 공개 기술 아티클 발행',
    },
    {
      category: 'SEMINAR',
      title: '고객사 대상 설계 프로세스 세미나',
      description:
        '고객사의 설계 체계 진단부터 자동화 방향성까지, 실제 프로젝트 사례를 중심으로 세미나를 진행합니다.',
      detail: '예: 온·오프라인 기술 웨비나/워크숍',
    },
    {
      category: 'INSIDE',
      title: '알텍코리아 사람들 · 문화',
      description:
        '현업 엔지니어 인터뷰, 조직 문화, 성장 스토리 등을 통해 회사의 일하는 방식을 공유합니다.',
      detail: '예: 사내 스터디/프로젝트 후기, 팀 빌딩 활동 등',
    },
  ]

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
          꾸준히 공유하며,
          <span className="font-semibold text-[#4b2e2b]">
            {' '}
            업계와 함께 성장하는 커뮤니티
          </span>
          를 만들고자 합니다.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm shadow-neutral-200/80"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#4b2e2b]">
              {item.category}
            </p>
            <h3 className="mt-2 text-base font-semibold text-neutral-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-700 md:text-base">
              {item.description}
            </p>
            <p className="mt-3 text-sm text-neutral-500">{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default CommunitySection


