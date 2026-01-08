import CompanySection from '../components/CompanySection'

/**
 * 회사소개 페이지
 * - 기존 CompanySection 컴포넌트를 라이트 테마에서 단독 페이지로 사용
 */
function CompanyPage() {
  return (
    <section className="space-y-8">
      <CompanySection />
    </section>
  )
}

export default CompanyPage





