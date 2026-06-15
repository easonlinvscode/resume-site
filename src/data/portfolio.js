// 個人作品集（side project / demo 專案）
// image 欄位請放置於 src/assets/pic/ 並填入檔名，
// 若留空則使用暖色系預設縮圖樣式。
import isshonicImg from '../assets/pic/isshonic.png'
import tattooSettlementImg from '../assets/pic/Tattoo_Settlement.png'
import adminFlowImg from '../assets/pic/AdminFlow.png'

export const portfolio = [
  {
    name: '客戶網站需求收集表單專案',
    enName: 'Client Requirements Questionnaire',
    link: 'https://easonlinvscode.github.io/client-requirements/',
    image: isshonicImg,
    accent: 'iSSHONIC',
    summary:
      '為自有工作室 iSSHONIC 藝起創工作室打造的接案需求蒐集前端系統，7 步驟漸進式問卷、即時驗證與自動回覆全流程。',
    description:
      '客戶網站需求問卷系統 Client Intake Questionnaire 是一個為自有工作室 iSSHONIC 藝起創工作室打造的接案需求蒐集前端系統。使用 HTML5 + CSS3 + 原生 JavaScript 開發，實作 7 步驟漸進式問卷介面、即時表單驗證、進度條與步驟導航、響應式設計與 iOS 體驗優化等核心功能。以 Google Forms + Google Sheets 作為免費後端資料庫，透過 hidden iframe POST 繞過跨網域限制，搭配 Google Apps Script 撰寫表單提交觸發器自動寄出品牌化 HTML 信件（客戶確認信／管理端通知信），完成填表到自動回覆的全流程。專案透過自訂的 GitHub Actions workflow 設定 CI/CD，自動建置並部署至 GitHub Pages。',
    tags: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Google Apps Script', 'GitHub Actions', 'GitHub Pages'],
  },
  {
    name: '塔圖聚落 Tattoo Settlement',
    enName: 'Tattoo Settlement',
    link: 'https://easonlinvscode.github.io/tattoo-settlement/artists',
    image: tattooSettlementImg,
    accent: 'Tattoo',
    summary:
      '刺青師與顧客媒合平台前端 demo，雙角色頁面、權限路由守衛、作品瀏覽收藏與預約表單，暗色品牌視覺。',
    description:
      '塔圖聚落 Tattoo Settlement 是一個刺青師與顧客媒合平台的前端 demo。使用 Vue 3（Composition API）+ Vite 開發，實作顧客端與設計師端雙角色頁面、權限路由守衛、作品瀏覽與收藏、預約需求表單等核心功能。以 Pinia 進行狀態管理並支援本機持久化，搭配 Tailwind CSS 客製化視覺系統打造具品牌感的暗色介面。專案透過 GitHub Actions 設定 CI/CD，自動建置並部署至 GitHub Pages。',
    tags: ['Vue 3', 'Vite', 'Vue Router', 'Pinia', 'Tailwind CSS', 'GitHub Actions'],
  },
  {
    name: 'AdminFlow 訂單管理系統',
    enName: 'AdminFlow Admin Dashboard',
    link: 'https://easonlinvscode.github.io/admin-flow/login',
    image: adminFlowImg,
    accent: 'AdminFlow',
    summary:
      '企業級後台管理介面前端 demo，RBAC 角色權限、Token 自動刷新、Mock API 與 ECharts 數據視覺化。',
    description:
      'AdminFlow 後台管理系統是一個企業級後台管理介面的前端 demo。使用 Vue 3（Composition API）+ TypeScript + Vite 開發，實作用戶、商品、訂單、角色權限等管理模組，並依 admin / editor / viewer 三層角色設計路由守衛與選單權限控制（RBAC）。以 Pinia 進行全域狀態管理，搭配 Axios 攔截器實現 Token 自動刷新機制，並建立 Mock Data 架構在無後端環境下完整模擬真實 API 行為。介面採用 Tailwind CSS v4 + SCSS 打造響應式版面，針對行動裝置（<768px）實作側邊欄漢堡選單；Dashboard 整合 ECharts 製作數據視覺化（訂單趨勢、會員成長、分類銷售），並支援 CSV 報表匯出。專案透過 GitHub Actions 設定 CI/CD，自動執行 TypeScript 型別檢查與建置，並部署至 GitHub Pages。',
    tags: ['Vue 3', 'TypeScript', 'Vite', 'Vue Router', 'Pinia', 'Element Plus', 'ECharts', 'Tailwind CSS', 'SCSS', 'GitHub Actions'],
  },
]
