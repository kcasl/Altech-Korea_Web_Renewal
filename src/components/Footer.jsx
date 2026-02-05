
function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-6 text-[11px] text-neutral-500 sm:text-xs md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <p className="font-semibold text-neutral-900">ALTECH KOREA</p>
        </div>

        <div className="space-y-1 md:col-span-1">
          <p className="break-keep">주소 : 경기도 부천시 오정로 190번길 21 2층</p>
          <p className="break-keep">서울 사무소 연락처 : 02-305-7552</p>
        </div>

        <div className="space-y-1 md:col-span-1">
          <p>상담 전화 : 010-5332-1138</p>
          <p>사업자 번호 : 130-46-32742</p>
          <p className="break-all">이메일 : yuhan74@hanmail.net</p>
        </div>

        <p className="text-[11px] text-neutral-400 md:col-span-3">
          © 2013 ALTECH KOREA. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer


