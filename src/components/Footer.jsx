
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-6 text-xs text-neutral-500 md:flex-row md:items-center md:justify-between">
        
        <div>
          <p className="font-semibold text-neutral-900">ALTECH KOREA</p>
        </div>
        <div>
          <p className="mt-1">
            주소 : 경기도 부천시 오정로 190번길 21
          </p>
          <p className="mt-1">
            서울 사무소 연락처 : 02-333-1174
          </p>
        </div>
        
        <div>
          <p className="mt-1">
            상담 전화 : 010-5332-1138
          </p>
          <p className="mt-1">
            사업자 번호 : 130-46-32742
          </p>
          </div>
          <div>
          <p className="mt-1">
            이메일 : yuhan74@hanmail.net
          </p>
        </div>
        <p className="text-[12px] text-neutral-400">
          © {new Date().getFullYear()} ALTECH KOREA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer


