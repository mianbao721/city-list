# 我的城市清单

一个用原生 HTML + CSS 写的城市推荐小站：四张卡片，封面全部用 CSS 画，鼠标移上去有视差动效。

![页面预览](docs/preview.png)

## 做了什么

- **四座城市**：洛阳、重庆、西安、苏州，每张卡片有封面、城市名、所在区域和一句介绍。
- **封面纯 CSS 绘制**：没有一张图片。天空是渐变，太阳/月亮是径向渐变，山、楼、城墙、屋顶是用 `clip-path` 裁出来的多边形剪影。
- **悬停动效**：鼠标移上去，卡片浮起、封面提亮，远近两层剪影以不同幅度上移和放大，形成视差。
- **两列网格布局**：页面居中，卡片宽度由 Grid 分配，不写死。

![悬停前后对比](docs/hover-compare.png)

## 技术点

| 技术 | 用在哪 |
| --- | --- |
| 语义化 HTML | `header` / `h1` / `h2` / `p`，标题层级清晰 |
| CSS Grid | `.list` 两列布局，`repeat(2, minmax(0, 1fr))` + `gap` |
| `margin: 0 auto` | `.page` 定宽居中 |
| 多层背景 | `linear-gradient` 天空 + `radial-gradient` 太阳 |
| 伪元素 | `::before` / `::after` 画远近两层剪影 |
| `clip-path: polygon()` | 用百分比坐标裁出山脊、楼群、城墙、屋顶 |
| `transform` + `transition` | 悬停时的位移与缩放，不触发重排 |
| `prefers-reduced-motion` | 系统开启“减少动态效果”时关闭动画 |

## 目录结构

```
city-list/
├─ index.html        页面结构
├─ css/
│  └─ style.css      全部样式（基础 → 布局 → 卡片 → 封面 → 动效）
├─ docs/
│  ├─ preview.png
│  └─ hover-compare.png
└─ README.md
```

## 怎么运行

直接用浏览器打开 `index.html` 即可。

也可以起一个本地服务器（和线上环境一致）：

```bash
python -m http.server 8080
```

然后访问 <http://localhost:8080>。

## 说明

- 页面按桌面端设计，没有做手机适配。
- 封面是代码绘制的插画，不涉及第三方图片版权。
