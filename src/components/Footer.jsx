/**
 * 푸터 섹션
 * - 회사 기본 정보와 간단한 연락처를 노출
 * - 실제 주소/사업자 정보는 운영 단계에서 교체 가능
 */
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-neutral-900">ALTECH KOREA</p>
          <p className="mt-1">
            경기도 부천시 오정로 190번길 21, 알텍코리아 | IT 금형설계 전문회사
          </p>
          <p className="mt-1">
            Tel. 02-333-1174 | 서울 사무소
          </p>
          <p className="mt-1">
            Tel. 010-5332-1138 | 상담 전화
          </p>
          <p className="mt-1">
            130-46-32742 | 사업자 번호
          </p>
        </div>
        <p className="text-[11px] text-neutral-400">
          © {new Date().getFullYear()} ALTECH KOREA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer


