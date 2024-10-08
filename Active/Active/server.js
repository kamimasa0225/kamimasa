const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 정적 파일 제공
app.use(express.static(path.join(dirname, '../ACTIVE')));

// 기본 라우트
app.get('/', (req, res) => {
  res.sendFile(path.join(dirname, 'index.html'));
});

// 서버 시작
app.listen(PORT, () => {
  console.log("Server is running on ${PORT}");
});