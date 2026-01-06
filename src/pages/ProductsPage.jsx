import ProductSection from '../components/ProductSection'

/**
 * 제품소개 페이지
 * - 기존 ProductSection 컴포넌트를 라이트 테마에서 단독 페이지로 사용
 */
function ProductsPage() {
  return (
    <section className="space-y-8">
      <ProductSection />
    </section>
  )
}

export default ProductsPage



