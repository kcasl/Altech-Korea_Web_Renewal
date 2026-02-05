import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // AWS/Docker 등 리소스가 제한된 환경에서 gzip 크기 계산 단계가 오래 걸려
    // 빌드가 멈춘 것처럼 보이는 경우가 있어 비활성화합니다. (산출물에는 영향 없음)
    reportCompressedSize: false,
  },
})
