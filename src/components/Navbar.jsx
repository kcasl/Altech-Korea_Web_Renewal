import { NavLink } from 'react-router-dom'

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
        <NavLink to="/" className="flex items-center">
          <span className="text-2xl font-extrabold tracking-tight text-[#4b2e2b] lg:text-3xl">
            ALTECH KOREA
          </span>
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
