import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  // 라우터 경로와 라벨 정의
  const menus = [
    { to: '/company', label: '회사소개' },
    { to: '/products', label: '제품소개' },
    { to: '/careers', label: '채용정보' },
    { to: '/community', label: '커뮤니티' },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-10">
        {/* 좌측 로고 영역 - 클릭 시 홈(/)으로 이동 */}
        <NavLink to="/" className="flex items-center">
          <span className="whitespace-nowrap text-lg font-extrabold leading-none tracking-tight text-[#4b2e2b] sm:text-xl md:text-2xl lg:text-3xl">
            <span className="md:hidden">ALTECH</span>
            <span className="hidden md:inline">ALTECH KOREA</span>
          </span>
        </NavLink>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden items-center gap-4 text-sm font-medium text-neutral-700 md:flex md:gap-5 md:text-base lg:gap-7 lg:text-lg">
          {menus.map((menu) => (
            <li key={menu.to}>
              <NavLink
                to={menu.to}
                className={({ isActive }) =>
                  [
                    'whitespace-nowrap px-2 py-1 transition-colors',
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

        {/* 모바일 햄버거 버튼 */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50 md:hidden"
          aria-label="메뉴 열기"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((v) => !v)}
        >
          {isMobileMenuOpen ? '닫기' : '메뉴'}
        </button>

        {/* 모바일 메뉴 패널 */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 right-0 top-full mt-3 rounded-2xl border border-neutral-200 bg-white/95 p-3 shadow-lg backdrop-blur md:hidden">
            <ul className="flex flex-col gap-1 text-base font-semibold text-neutral-800">
              {menus.map((menu) => (
                <li key={menu.to}>
                  <NavLink
                    to={menu.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      [
                        'block rounded-xl px-4 py-3 transition-colors',
                        isActive
                          ? 'bg-[#4b2e2b]/10 text-[#4b2e2b]'
                          : 'hover:bg-neutral-100',
                      ].join(' ')
                    }
                  >
                    {menu.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
