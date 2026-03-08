# Test2 - Digital Clock

## 项目简介
这是一个使用原生前端技术实现的数字时钟小项目。页面采用暗色背景与霓虹文字风格，居中展示当前时间。

## 功能说明
- 按 `HH:MM:SS` 格式显示当前时间
- 使用 `setInterval` 每秒更新一次时间
- 页面内容垂直和水平居中
- 暗色主题 + 霓虹发光文本样式

## 技术栈
- HTML
- CSS
- Vanilla JavaScript

## 项目结构
```text
Test2/
  index.html
  style.css
  script.js
  README.md
```

## 运行方式
1. 进入 `Test2` 目录
2. 使用浏览器直接打开 `index.html`

## 关键实现
- `script.js` 中通过 `renderTime()` 获取系统时间
- 使用 `padStart(2, "0")` 补齐两位数字
- 使用 `setInterval(renderTime, 1000)` 实现每秒刷新
