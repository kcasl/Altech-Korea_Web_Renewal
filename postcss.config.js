// Tailwind CSS v4에서는 PostCSS 플러그인이 별도 패키지(@tailwindcss/postcss)로 분리되었습니다.
// 따라서 기존의 'tailwindcss' 플러그인 대신 '@tailwindcss/postcss' 를 사용해야 합니다.
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  // Tailwind → Autoprefixer 순으로 처리
  plugins: [tailwindcss, autoprefixer],
}