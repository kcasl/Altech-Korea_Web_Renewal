import { NavLink } from 'react-router-dom'

/**
 * 상단 고정 네비게이션 바
 * - 흰색 배경 + 검은 글씨, 포인트 컬러는 짙은 갈색(#4b2e2b)
 * - 회사소개 / 제품소개 / 채용정보 / 커뮤니티를 개별 페이지로 이동
 * - 상단 여백과 좌우 패딩을 넉넉하게 주어 좀 더 폭넓은 인상을 줌
 */
function Navbar() {
  // 라우터 경로와 라벨 정의
  const menus = [
    { to: '/company', label: '회사소개' },
    { to: '/products', label: '제품소개' },
    { to: '/careers', label: '채용정보' },
    { to: '/community', label: '커뮤니티' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-10">
        {/* 좌측 로고 영역 - 클릭 시 홈(/)으로 이동 */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#4b2e2b] text-lg font-bold text-white shadow-md shadow-[#4b2e2b33]">
            A
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide text-neutral-900 lg:text-base">
              ALTECH KOREA
            </span>
            <span className="text-xs text-neutral-500">
              IT 금형설계 전문회사
            </span>
          </div>
        </NavLink>

        {/* 우측 메뉴 리스트 */}
        <ul className="flex flex-wrap items-center gap-5 text-base font-medium text-neutral-700 lg:gap-7 lg:text-lg">
          {menus.map((menu) => (
            <li key={menu.to}>
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  [
                    'px-2 py-1 transition-colors',
                    isActive
                      ? 'text-[#4b2e2b] border-b-2 border-[#4b2e2b]'
                      : 'hover:text-[#4b2e2b]',
                  ].join(' ')
                }
              >
                {menu.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
