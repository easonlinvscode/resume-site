# Eason｜個人履歷網站

Vue 3 + Tailwind CSS 4 打造的動態履歷網站，採用暖橘 × 奶油白的溫暖簡約風格。

## 開發

```bash
npm install
npm run dev      # 本機開發 http://localhost:5173
npm run build    # 打包至 dist/
npm run preview  # 預覽打包結果
```

## 內容調整

所有履歷內容集中於 `src/data/`，更新履歷只需編輯這些檔案，不需改動元件：

- `profile.js` — 姓名、自傳、求職條件、聯絡方式
- `experience.js` — 工作經歷時間軸
- `projects.js` — 專案亮點
- `skills.js` — 技能分類與標籤
- `education.js` — 學歷與證照
- `languages.js` — 語言能力

## 注意事項

- `src/data/profile.js` 中的電話號碼為佔位文字 `0955-xxx-xxx`，請自行填入完整號碼。
- 字體（Noto Sans TC / Inter）透過 Google Fonts CDN 載入，需在有網路環境下載入完整效果。
- `src/components/HelloWorld.vue`、`src/assets/hero.png`、`src/assets/vue.svg` 為 Vite 預設範例檔案，未被引用，可自行刪除。
