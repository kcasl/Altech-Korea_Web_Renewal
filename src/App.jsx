import './App.css'
import { Routes, Route } from 'react-router-dom'

// 레이아웃 컴포넌트
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// 페이지 컴포넌트
import HomePage from './pages/HomePage'
import CompanyPage from './pages/CompanyPage'
import ProductsPage from './pages/ProductsPage'
import CareersPage from './pages/CareersPage'
import CommunityPage from './pages/CommunityPage'

function App() {
  return (
    // 전체 페이지 공통 배경/글자색: 흰색 배경 + 검은 글씨
    <div className="flex min-h-screen flex-col bg-white text-neutral-900">
      {/* 상단 네비게이션 바 */}
      <Navbar />

      {/* 라우팅으로 바뀌는 메인 콘텐츠 영역 */}
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pt-24 pb-16">
        <Routes>
          {/* 초기 화면: 사진 자리 + 연락처/메일 정보 */}
          <Route path="/" element={<HomePage />} />

          {/* 회사소개 / 제품소개 / 채용정보 / 커뮤니티 개별 페이지 */}
          <Route path="/company" element={<CompanyPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </main>

      {/* 하단 푸터 */}
      <Footer />
    </div>
  )
}

export default App
