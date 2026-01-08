import recruitImg from '../assets/employment/recruit.jpg'

function CareersSection() {

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
          알텍코리아는 금형설계 전문가와 개개인의 비전을 지닌 성실하고 우수한 인재를 모집합니다.
          <br />
          실제 채용 공고는 시기에 따라 변동될 수 있으며 채용시 구인구직 사이트를 이용할 예정입니다.
        </p>
      </header>

      <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white">
        <img
          src={recruitImg}
          alt="알텍코리아 채용정보 안내"
          className="h-auto w-full object-contain"
        />
      </section>
    </section>
  )
}

export default CareersSection


